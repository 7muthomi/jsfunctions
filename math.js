function mathematicalOperations(n, operation) {
  switch (operation) {
    case "factorial":
      if (n < 0) return "Factorial is not defined for negative numbers";
      if (n === 0 || n === 1) return 1;
      let fact = 1;
      for (let i = 2; i <= n; i++) {
        fact *= i;
      }
      return fact;

    case "prime":
      if (n <= 1) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;

    case "fibonacci":
      if (n <= 0) return "Please enter a positive number";
      let fib = [0, 1];
      for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      }
      return fib;

    default:
      return "Invalid operation";
  }
}
