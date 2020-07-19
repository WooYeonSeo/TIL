// Testing Gist
var heapSort = function (arr) {
  var n = arr.length;
  for (var i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

  for (var i = n - 1; i >= 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }

  return arr;
};
// n = heapsize
var heapify = function (arr, heapSize, i) {
  var left = 2 * i + 1; // leftnode
  var right = 2 * i + 2; // rightNode

  if (left >= heapSize && right >= heapSize) return;

  // heapsize 보다 커지면(=제일 바닥까지 온 것) -infinite
  const leftValue = left >= heapSize ? Number.NEGATIVE_INFINITY : arr[left];
  const rightValue = right >= heapSize ? Number.NEGATIVE_INFINITY : arr[right];

  // 왼쪽노드값이 root노드보다 작고 , 오른쪽노드가 루트노드보다 작으면 반환
  if (arr[i] > leftValue && arr[i] > rightValue) return;

  // 둘 중 하나라도 작지 않으면 더 큰값을 상위로 올린다
  if (leftValue > rightValue) {
    swap(arr, i, left);
    //왼쪽노드를 root로 정렬된 상태인지 검사하자
    heapify(arr, heapSize, left);
  } else {
    swap(arr, i, right);
    //왼쪽노드를 root로 정렬된 상태인지 검사하자
    heapify(arr, heapSize, right);
  }
};

var swap = function (arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

//console.log(heapSort([14, 1, 10, 2, 3, 5, 6, 4, 7, 11, 12, 13]));
//console.log(heapSort([]));
//console.log(heapSort([1]));
console.log(heapSort([2, 1]));
//console.log(heapSort([1, 7, 2, 3, 4, 1, 10, 2, 3, 4, 5]));
