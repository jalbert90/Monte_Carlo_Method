function approx(pts) {
    // Count the number of points inside the quarter-circle.
    const insideCount = pts.filter(([x, y]) => x ** 2 + y ** 2 <= 1).length;

    // Calculate the approximation of ?.
    const pi = 4 * insideCount / pts.length;

    // Return the approximation.
    return pi;
}

// Generate an array of 1000 random points.
const pts = Array.from({ length: 1000 }, () => [
    Math.random(),
    Math.random(),
]);

// Estimate the value of ?.
const pi = approx(pts);

// Print the result.
console.log(pi);