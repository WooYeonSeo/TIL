function selectionSort(arr, start) {
  if (start < arr.length - 1) {
    let minIndex = start;
    for (let i = start; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    swap(arr, start, minIndex);
    selectionSort(arr, start + 1);
  }
}

function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}

//실행
let arr = [12, 11, 10, 19, 14, 1];
let start = 0;

selectionSort(arr, start);

console.log(arr);
