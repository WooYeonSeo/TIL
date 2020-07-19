function QuickSort(arr, start, end) {
  let partIdx = partition(arr, start, end);

  if (start < partIdx - 1) {
    QuickSort(arr, start, partIdx - 1);
  } else if (end > partIdx) {
    QuickSort(arr, partIdx + 1, end);
  }
}
function partition(arr, start, end) {
  let pivotIdx = Math.floor((start + end) / 2);
  let pivot = arr[pivotIdx];
  while (start <= end) {
    while (arr[start] < pivot) start++;
    while (arr[end] > pivot) end--;
    if (start <= end) {
      swap(arr, start, end);
      start++;
      end--;
    }
  }
  console.log(arr);
  return start;
}

function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}
// 실행
let arr = [12, 11, 10, 19, 14, 1];
let start = 0;
let end = arr.length - 1;

QuickSort(arr, start, end);

console.log("Result::", arr);
