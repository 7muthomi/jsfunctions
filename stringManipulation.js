function manipulateString(str, operation) {
  switch (operation) {
    case "reverse":
      return str.split("").reverse().join("");

    case "count":
      return str.length;

    case "capitalize":
      return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    default:
      return "Invalid operation";
  }
}
console.log(manipulateString("hello", "reverse"));
console.log(manipulateString("hello", "count"));
console.log(manipulateString("hello world", "capitalize"));
