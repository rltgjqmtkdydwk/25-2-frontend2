function createPerson(name:string, age:number) : {name:string, age:number}{
  return {name, age};
}

type Person = {
  name: string;
  age: number;
};

function createPerson1(name: string, age: number): Person {
  return { name, age };
}

console.log(createPerson("홍길동", 16));
console.log(createPerson1("홍길동", 16));
