function mergeSort(arr, temp, start, end) {
  if (start < end) {
    let mid = Math.floor((end + start) / 2);

    mergeSort(arr, temp, start, mid);
    mergeSort(arr, temp, mid + 1, end);

    let partition = merge(arr.slice(start, mid), arr.slice(mid, end));
    let j = 0;
    console.log("end", partition);

    for (let i = start; i < end; i++) {
      arr[i] = partition[j++];
    }
  }
}

function merge(leftArr, rightArr) {
  // copy temp arr : 비교용
  console.log("leftArr", leftArr);
  console.log("rightArr", rightArr);
  let resultArr = [];
  let leftIdx = 0;
  let rightIdx = 0;
  let newIndex = 0;
  while (leftIdx < leftIdx.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] <= rightArr[rightIdx]) {
      resultArr[newIndex] = leftArr[leftIdx];
      leftIdx++;
    } else {
      resultArr[newIndex] = rightArr[rightIdx];
      rightIdx++;
    }
    newIndex++;
  }

  if (leftIdx < leftArr.length) {
    for (let i = leftIdx; i < leftArr.length; i++) {
      resultArr[newIndex] = leftArr[i];
    }
  } else if (rightIdx < rightArr.length) {
    for (let i = rightIdx; i < rightArr.length; i++) {
      resultArr[newIndex] = rightArr[i];
    }
  }
  console.log("resultArr", resultArr);

  return resultArr;
}

// 실행
let arr = [12, 1, 5, 2, 11];
mergeSort(arr, [], 0, arr.length - 1);
console.log("Result::", arr);
