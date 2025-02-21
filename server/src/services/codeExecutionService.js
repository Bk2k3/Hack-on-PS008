// services/codeExecutionService.js
import { VM } from 'vm2';

export const executeCode = async (code, language, testCases) => {
  try {
    const vm = new VM({
      timeout: 3000,
      sandbox: {
        console: {
          log: () => {}, // Suppress console.log in submitted code
        }
      }
    });

    const results = [];
    
    for (const test of testCases) {
      try {
        let result;
        
        if (language === 'javascript') {
          const wrappedCode = `
            ${code}
            module.exports = ${test.input}
          `;
          result = vm.run(wrappedCode);
        } else if (language === 'python') {
          // For Python code execution, you'd need to set up a Python interpreter
          // This is a placeholder - implement actual Python execution
          throw new Error('Python execution not implemented');
        }

        results.push({
          passed: JSON.stringify(result) === JSON.stringify(test.expectedOutput),
          input: test.input,
          expected: test.expectedOutput,
          actual: result,
          error: null
        });
      } catch (error) {
        results.push({
          passed: false,
          input: test.input,
          expected: test.expectedOutput,
          actual: null,
          error: error.message
        });
      }
    }
    
    return results;
  } catch (error) {
    throw new Error(`Code execution failed: ${error.message}`);
  }
};