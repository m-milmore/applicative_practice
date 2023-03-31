/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  return [...data.asteroids]
    .sort(
      (a, b) =>
        data.asteroids.filter((v) => v.discoveryYear === a.discoveryYear).length -
        data.asteroids.filter((v) => v.discoveryYear === b.discoveryYear).length
    )
    .pop().discoveryYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
