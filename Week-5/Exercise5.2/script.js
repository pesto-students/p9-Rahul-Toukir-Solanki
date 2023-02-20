function vowelCount(str) {
  str = str.toLowerCase();
  const vowels = "aeiou";
  const map = new Map();

  for (let char of str) {
    if (vowels.includes(char)) {
      let count = map.get(char) || 0;
      map.set(char, count + 1);
    }
  }

  return map;
}

console.log(vowelCount("TOUKIR SOLANKI"));
