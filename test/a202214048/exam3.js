function printAge(person) {
  console.log(person.age || "나이를 모름");
}

printAge({ name: "홍길동", age: 16 });
printAge({ name: "임꺽정" });