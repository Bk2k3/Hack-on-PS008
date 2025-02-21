import { VM } from 'vm2';

export const executeCode = async (userCode, testInput, language) => {
  try {
    const vm = new VM({
      timeout: 1000,
      sandbox: {}
    });

    // Wrap the user code in an IIFE and return the function named twoSum
    const wrappedCode = `
      (function(){
        ${userCode}
        return twoSum;
      })()
    `;
    const func = vm.run(wrappedCode);
    const parameters = eval(testInput);
    const output = func(...parameters);
    return JSON.stringify(output);
  } catch (error) {
    return error.toString();
  }
};
