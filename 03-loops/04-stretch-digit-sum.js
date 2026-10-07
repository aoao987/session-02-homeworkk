// =============================================
// 3. LOOPS — STRETCH: Digit sum
// =============================================
// Create number = 2026. Calculate the sum of its digits: 2 + 0 + 2 + 6.
// Hints:
//   2026 % 10             -> 6    (last digit)
//   Math.floor(2026 / 10) -> 202  (remove the last digit)
// Repeat with a while loop until nothing is left.
//
// Expected output:
//   Digit sum of 2026 = 10

// your code here
const number = 2026;

let remaining = number;
let sum = 0;

while (remaining > 0) {
    const digit = remaining % 10;
    sum += digit;
    remaining = Math.floor(remaining / 10);
}

console.log(`Digit sum of ${number} = ${sum}`);