//최대공약수
function gcd(a, b) {
  while (b != 0) {
    let r = a % b; // 4
    a = b; // 14 -> 4 -> 2
    b = r; // 4 -> 2 -> 0
  }
  return a;
}
// 최소공배수 * 최대공약수 = a * b
// 최소공배수 = (A x B)/ 최대공약수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(15, 14));
