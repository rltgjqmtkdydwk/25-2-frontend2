// 함수의 구조분해할당 : 파라미터값 전달 - 객체 
function print1(person) {
  console.log(person.name, person.age);
}

function print2({name, age}) {
  console.log(name, age);
}

let person = {name: "홍길동", age: 16 };
print1(person);
print2(person);