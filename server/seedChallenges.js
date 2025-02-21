import 'dotenv/config.js';
import mongoose from 'mongoose';
import Challenge from './src/models/Challenge.js';

const sampleChallenges = [
  {
    title: "Two Sum",
    description: "Find indices of two numbers that add up to a target value.",
    instructions: [
      "Given an array of integers and a target value, return the indices of the two numbers that add up to the target."
    ],
    difficulty: "Beginner",
    points: 100,
    language: "javascript",
    starterCode: `function twoSum(nums, target) {
  // Your code here
}`,
    testCases: [
      {
        input: "[2,7,11,15], 9",
        expectedOutput: "[0,1]",
        explanation: "2 + 7 equals 9."
      }
    ],
    solution: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    category: "Arrays"
  },
  {
    title: "Reverse String",
    description: "Reverse a given string.",
    instructions: [
      "Return the reverse of the provided string."
    ],
    difficulty: "Beginner",
    points: 50,
    language: "javascript",
    starterCode: `function reverseString(str) {
  // Your code here
}`,
    testCases: [
      {
        input: `"hello"`,
        expectedOutput: `"olleh"`,
        explanation: "Reversing 'hello' gives 'olleh'."
      }
    ],
    solution: `function reverseString(str) {
  return str.split('').reverse().join('');
}`,
    category: "Strings"
  },
  {
    title: "Factorial",
    description: "Compute the factorial of a number.",
    instructions: [
      "Given a non-negative integer n, return the factorial of n."
    ],
    difficulty: "Beginner",
    points: 75,
    language: "javascript",
    starterCode: `function factorial(n) {
  // Your code here
}`,
    testCases: [
      {
        input: "5",
        expectedOutput: "120",
        explanation: "5! = 5 * 4 * 3 * 2 * 1 = 120."
      }
    ],
    solution: `function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}`,
    category: "Math"
  },
  {
    title: "Palindrome Checker",
    description: "Check if a string is a palindrome.",
    instructions: [
      "Return true if the provided string is a palindrome, false otherwise."
    ],
    difficulty: "Beginner",
    points: 60,
    language: "javascript",
    starterCode: `function isPalindrome(str) {
  // Your code here
}`,
    testCases: [
      {
        input: `"racecar"`,
        expectedOutput: "true",
        explanation: "'racecar' is a palindrome."
      },
      {
        input: `"hello"`,
        expectedOutput: "false",
        explanation: "'hello' is not a palindrome."
      }
    ],
    solution: `function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}`,
    category: "Strings"
  }
];

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(async () => {
    console.log('MongoDB connected');
    await Challenge.deleteMany({});
    await Challenge.insertMany(sampleChallenges);
    console.log('Sample challenges inserted');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error inserting challenges', err);
    process.exit(1);
  });
