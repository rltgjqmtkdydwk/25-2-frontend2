function test1(a) {
  console.log(a);
}

function test2(...a) {
  console.log(a);
}

function test3(a, ...b) {
  console.log(a, b);
}

test1( 1, 2, 3 ); // 1
test2( 1, 2, 3 ); // [ 1, 2, 3 ]
test3( 1, 2, 3 ); // 1 [2, 3]

test1( [3,4], [5,6], [7,8] ); // [3, 4]
test2( [3,4], [5,6], [7,8] ); // [[3,4], [5,6], [7,8]]
test3( [3,4], [5,6], [7,8] ); // [3, 4] [[5,6], [7,8]]