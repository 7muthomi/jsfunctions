function arrayManipulation(arr, operation, condition = null) {
  switch (operation) {
    case "maxMin":
      // Find both the maximum and minimum values in the array
      return {
        max: Math.max(...arr),
        min: Math.min(...arr),
      };

    case "sum":
      // Calculate the sum of all elements in the array
      return arr.reduce((sum, num) => sum + num, 0);

    case "filter":
      // Filter the array based on the provided condition
      return arr.filter(condition);

    default:
      return "Invalid operation";
  }
}
