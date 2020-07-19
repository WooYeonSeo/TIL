function bubbleSort(arr, last) {
  // 뒤에서부터 정렬 된 게 다 끝났으면 exit
  if (last > 0) {
    for (let i = 1; i <= last; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
      }
    }
    bubbleSort(arr, last - 1);
  }
}

function bubbleSortInverse(arr, last) {
  // 뒤에서부터 정렬 된 게 다 끝났으면 exit
  if (last > 0) {
    for (let i = 1; i <= last; i++) {
      if (arr[i - 1] < arr[i]) {
        swap(arr, i - 1, i);
      }
    }
    bubbleSortInverse(arr, last - 1);
  }
}

function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}

//실행

let arr = [12, 11, 10, 19, 14, 1];
let last = arr.length - 1;

bubbleSort(arr, last);

console.log(arr);
