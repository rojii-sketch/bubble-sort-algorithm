function quickSort(arr) {
  // Base case: arrays with 0 or 1 elements are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot (the middle element works beautifully here)
  const midIndex = Math.floor(arr.length / 2);
  const pivot = arr[midIndex];

  // Create buckets for smaller, equal, and larger items
  const left = [];
  const equal = [];
  const right = [];

  // Categorize every single element into the correct bucket
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);      // Elements strictly smaller
    } else if (arr[i] === pivot) {
      equal.push(arr[i]);     // Captures duplicates so they don't get lost!
    } else {
      right.push(arr[i]);     // Elements strictly larger
    }
  }

  // Recursively sort left and right, then stitch them all together
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Test case from your test runner:
const result = quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(result);
// Output: [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]