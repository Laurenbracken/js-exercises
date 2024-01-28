export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }

  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const filteredNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0).toUpperCase() === char.toUpperCase()) {
      filteredNames.push(names[i]);
    }
  }
  return filteredNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const verbWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("to") && words[i].length > 3) {
      verbWords.push(words[i]);
    }
  }
  return verbWords;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const cities = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.data && user.data.city && user.data.city.displayName) {
      cities.push(user.data.city.displayName);
    }
  }
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const squareRoots = [];
  for (let i = 0; i < nums.length; i++) {
    const squareRoot = Math.sqrt(nums[i]);
    const roundedSquareRoot = parseFloat(squareRoot.toFixed(2));
    squareRoots.push(roundedSquareRoot);
  }

  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  const matchingSentences = [];
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      matchingSentences.push(sentence);
    }
  }

  return matchingSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const longestSides = [];
  for (let i = 0; i < triangles.length; i++) {
    const triangle = triangles[i];
    const longestSide = Math.max(...triangle);
    longestSides.push(longestSide);
  }

  return longestSides;
}
