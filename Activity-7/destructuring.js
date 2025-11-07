//const multiply = (a, b) => a * b;
//console.log(multiply(4, 5));

// 1. Destructure user object
const user1 = { name: "Joshua" };
const user2 = { age: 25 };

const merged = { ...user1, ...user2 };
console.log(merged);

// 2. Combine frontend and backend arrays
const frontend = ["React", "Vue"];
const backend = ["Node", "Express"];

const fullStack = [...frontend, ...backend];
console.log("Full Stack Technologies:", fullStack);

// 3. Function to compute average using rest operator
const average = (...nums) => {
  const total = nums.reduce((sum, num) => sum + num, 0);
  return nums.length ? total / nums.length : 0;
};

console.log("Average:", average(15, 25, 35, 45)); // Output: 30
