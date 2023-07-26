// Function to approximate the value of pi.
// Input: an array of points (each point is an array containing two numbers: [x, y]).
// Output: a float representing an approximation of pi.
function approx(pts) {
    // Count the number of points inside the quarter-circle.
    // The filter function creates a copy of the pts array containing only those points satisfying x^2 + y^2 <= 1.
    // The length attribute returns the length of this new array.
    const insideCount = pts.filter(([x, y]) => x ** 2 + y ** 2 <= 1).length;

    // Calculate the approximation of ?.
    // The approximation of pi is given by 4 * (number of points inside quarter circle)/(number of points in the square).
    const pi_approx = 4 * insideCount / pts.length;

    // Return the approximation.
    return pi_approx;
}

// Generate an array of 100,000 random points.
// Each point is an array containing two numbers: [x, y].
// 0 <= x, y < 1 since Math.random() returns values between 0 (inclusive) and 1 (exclusive) in a uniform distribution.
const pts = Array.from({ length: 100000 }, () => [
    Math.random(),
    Math.random(),
]);

// Estimate the value of ?.
const pi_approx = approx(pts);

// Print the result.
console.log(pi_approx);