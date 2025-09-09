// Interview Coding Challenge
// Provide 3 unique implementations of sum_to_n(n: number): number
// Input: n — any integer
// Assumptions:
// - The computed result always fits within Number.MAX_SAFE_INTEGER (no overflow)
// - n may be negative, zero, or positive
// Output:
// - For n > 0: 1 + 2 + ... + n
// - For n = 0: 0
// - For n < 0: n + (n + 1) + ... + (-1)
// Each implementation below includes its time/space complexity and efficiency notes.
//
// Implementation A: Mathematical Formula (Arithmetic Series)
//
// COMPLEXITY ANALYSIS:
// Time Complexity: O(1) - Constant time
//   - Performs only basic arithmetic operations (multiplication, division, negation)
//   - Number of operations does not depend on the size of input n
//   - Always executes in the same amount of time regardless of n value
//   - Single conditional check + one mathematical formula = constant operations
//
// Space Complexity: O(1) - Constant space
//   - Uses only a fixed amount of extra memory
//   - No data structures that grow with input size
//   - Only stores temporary calculation results in registers/stack
//   - Memory usage independent of n
//
// EFFICIENCY: Most efficient approach - optimal for all input sizes
// P/S: Thanks to this coding challenge, I learned about the Gauss formula for the sum of an arithmetic series. :)
function sum_to_n_a(n: number): number {
  // Handle negative numbers by returning sum from n to -1
  if (n < 0) {
    return -((-n) * (-n + 1)) / 2;
  }
  // Gauss formula: n * (n + 1) / 2
  return (n * (n + 1)) / 2;
}

// Implementation B: Iterative Loop (My first thought approach)
//
// COMPLEXITY ANALYSIS:
// Time Complexity: O(n) - Linear time
//   - For positive n: loop executes exactly n iterations (i = 1 to n)
//   - For negative n: loop executes |n| iterations (i = n to -1)
//   - Each iteration performs constant time operations (comparison, addition, increment)
//   - Total operations = |n| × constant = O(n)
//   - Execution time grows linearly with the absolute value of input
//
// Space Complexity: O(1) - Constant space
//   - Uses only two variables: 'sum' and loop counter 'i'
//   - Memory usage does not increase with input size
//   - No recursive calls or data structures that grow with n
//   - Stack frame size remains constant regardless of n
//
// EFFICIENCY: Moderate - good balance between readability and performance
// CHARACTERISTICS:
//   - Predictable performance scaling
//   - Easy to understand and debug
//   - Cache-friendly due to sequential access pattern
//   - No risk of stack overflow unlike recursive approach
function sum_to_n_b(n: number): number {
  let sum = 0;

  if (n >= 0) {
    // Sum from 1 to n
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  } else {
    // Sum from n to -1 (negative numbers)
    for (let i = n; i <= -1; i++) {
      sum += i;
    }
  }

  return sum;
}

// Implementation C: Recursive Approach
//
// COMPLEXITY ANALYSIS:
// Time Complexity: O(n) - Linear time
//   - For positive n: makes exactly n recursive calls (n, n-1, n-2, ..., 1, 0)
//   - For negative n: makes |n| recursive calls (n, n+1, n+2, ..., -1, 0)
//   - Each recursive call performs constant time operations (comparison, addition)
//   - Total function calls = |n| + 1 (including base case) = O(n)
//   - Function call overhead adds constant factor but doesn't change complexity class
// Example: sum_to_n_c(3) = 3 + sum_to_n_c(2) = 3 + 2 + sum_to_n_c(1) = 3 + 2 + 1 + sum_to_n_c(0) = 3 + 2 + 1 + 0 = 6
//
// Space Complexity: O(n) - Linear space due to call stack
//   - Each recursive call creates a new stack frame
//   - Maximum call stack depth = |n| + 1 frames
//   - Each frame stores: function parameters, return address, local variables
//   - Total memory usage grows linearly with input size
//   - Risk of stack overflow for large |n| values (typically n > ~10,000-50,000)
//
// EFFICIENCY: Least efficient due to function call overhead and memory usage
//
// STACK OVERFLOW RISK:
//   - Node.js default: ~10,000-15,000 recursive calls (I just found this out from https://stackoverflow.com/questions/61374279/limiting-recursion-depth-in-nodejs)
//   - I think it's safe to use iterative approach for n > 10,000
function sum_to_n_c(n: number): number {
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === -1) return -1;

  // Recursive cases
  if (n > 0) {
    return n + sum_to_n_c(n - 1);
  } else {
    return n + sum_to_n_c(n + 1);
  }
}

// Test cases
console.log("Testing sum_to_n implementations:");
console.log("sum_to_n_a(5):", sum_to_n_a(1000)); // Expected: 500500
console.log("sum_to_n_b(5):", sum_to_n_b(1000)); // Expected: 500500
console.log("sum_to_n_c(5):", sum_to_n_c(1000)); // Expected: 500500

console.log("sum_to_n_a(0):", sum_to_n_a(0)); // Expected: 0
console.log("sum_to_n_b(0):", sum_to_n_b(0)); // Expected: 0
console.log("sum_to_n_c(0):", sum_to_n_c(0)); // Expected: 0

console.log("sum_to_n_a(-3):", sum_to_n_a(-1000)); // Expected: -500500
console.log("sum_to_n_b(-3):", sum_to_n_b(-1000)); // Expected: -500500
console.log("sum_to_n_c(-3):", sum_to_n_c(-1000)); // Expected: -500500
