function hasDuplicate(arr) {
  console.log(new Set(arr).size !== arr.length);
}

hasDuplicate([1, 2, 3, 4, 5, 6, 7]);
