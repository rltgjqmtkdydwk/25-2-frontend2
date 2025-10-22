const clonePerson = ({ name, age }: { name: string; age: number }): { name: string; age: number } => {
  return { name, age: age + 1 };
};

console.log(clonePerson({ name: "홍길동", age: 16 }));
