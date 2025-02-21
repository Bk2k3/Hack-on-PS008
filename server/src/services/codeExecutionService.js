import ivm from 'isolated-vm';

export const executeUserCode = async (code, testCases) => {
  const results = [];
  const isolate = new ivm.Isolate({ memoryLimit: 128 }); // 128 MB limit
  const context = await isolate.createContext();
  const jail = context.global;
  await jail.set('global', jail.derefInto());

  for (const test of testCases) {
    try {
      // Assume user code defines a function named 'solution'
      const wrappedCode = `
        (function() {
          ${code}
          return solution(${JSON.stringify(test.input)});
        })();
      `;
      let output = await context.eval(wrappedCode, { timeout: 1000 });
      results.push({
        input: test.input,
        expected: test.expectedOutput,
        output,
        passed: output.toString() === test.expectedOutput.toString()
      });
    } catch (err) {
      results.push({
        input: test.input,
        expected: test.expectedOutput,
        output: err.message,
        passed: false
      });
    }
  }
  isolate.dispose();
  return results;
};
