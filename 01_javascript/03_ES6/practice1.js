const persons = [
  {name: "홍길동", age: 16},
  {name: "이몽룡", age: 16},
  {name: "임꺽정", age: 20},
  {name: "전우치", age: 23},  
  {name: "연흥부", age: 20},
  {name: "연놀부", age: 23},
]

//1. persons 배열에 age 값이 홀수인 사람만 모아서 새 배열을 만드시오
let persons1 = [...persons].filter(p => p.age%2 != 0);
console.log(persons1);

//2. persons 배열에서 age 값이 짝수인 사람의 나이만 +1을 한 새 배열을 만드시오
let persons2 = [...persons].map(p => p.age % 2 == 0 ? {...p, age : p.age + 1} : {...p});
console.log(persons2);

//3. persons 배열을 order by age desc, name asc 순으로 정렬하시오
let persons3 = persons.sort((p, e) => p.name.localeCompare(e.name)).sort((p, e) => e.age - p.age);
console.log(persons3);