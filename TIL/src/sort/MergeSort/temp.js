function mergeSort(arr, temp, start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, temp, start, mid);
    mergeSort(arr, temp, mid + 1, end);
    merge(arr, temp, start, mid, end);
  }
}

function merge(arr, temp, start, part1End, end) {
  for (let i = start; i <= end; i++) {
    temp[i] = arr[i];
  }

  let part1 = start;
  let part2 = part1End + 1;
  let index = start;

  while (part1 <= part1End && part2 <= end) {
    if (temp[part1] <= temp[part2]) {
      arr[index] = temp[part1];
      part1++;
    } else {
      arr[index] = temp[part2];
      part2++;
    }
    index++;
  }
  // 앞쪽 배열에 붙이기 mid(part1끝부터) - part1(중간에 멈춘 part1 idx) = 나머지 part1 갯수
  for (let i = 0; i <= part1End - part1; i++) {
    // console.log("배열에", mid - part1);
    arr[index + i] = temp[part1 + i]; // part1꺼 순서대로 붙이자
  }
  // 뒷쪽 배열은 이미 들어가있음
}

// 실행
let arr = [12, 11, 5, 2, 1];
mergeSort(arr, [], 0, arr.length - 1);
console.log("Result::", arr);
