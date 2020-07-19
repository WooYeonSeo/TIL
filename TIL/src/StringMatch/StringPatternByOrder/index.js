function match(str, match) {
  let index = 0;
  let matchArr = [];
  for (let i = 0; i < match.length; i++) {
    //
    let char = match[i];
    for (let j = index; j < str.length; j++) {
      let flagIdx = -1;
      if (char === str[j]) {
        index = j;
        flagIdx = j;
        matchArr.push(flagIdx);
        break;
      } else if (str.length - 1 === j) {
        matchArr.push(flagIdx);
      }
    }
  }

  for (let i = 0; i < matchArr.length; i++) {
    const element = matchArr[i];
    if (element < 0) return false;
  }
  return true;
}

// 실행
let sample = "abcad";
let matchStr = "acd";

console.log(match(sample, matchStr));
