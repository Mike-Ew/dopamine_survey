// scoring.js

export const calculateScore = (data) => {
  let score = 0;
  for (let key in data) {
    if (key.startsWith("attention")) {
      switch (data[key]) {
        case "N":
          score += 0;
          break;
        case "R":
          score += 1;
          break;
        case "S":
          score += 2;
          break;
        case "O":
          score += 3;
          break;
        case "A":
          score += 4;
          break;
        default:
          break;
      }
    } else {
      switch (data[key]) {
        case "N":
          score += 4;
          break;
        case "R":
          score += 3;
          break;
        case "S":
          score += 2;
          break;
        case "O":
          score += 1;
          break;
        case "A":
          score += 0;
          break;
        default:
          break;
      }
    }
  }
  return score;
};

export const getScoreRange = (score) => {
  if (score <= 30) {
    return "Very Low";
  } else if (score <= 60) {
    return "Low";
  } else if (score <= 80) {
    return "Normal";
  } else if (score <= 100) {
    return "High";
  } else {
    return "Very High";
  }
};
