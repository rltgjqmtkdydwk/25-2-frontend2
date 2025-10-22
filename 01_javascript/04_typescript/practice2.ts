// printPerson 함수 구현
// (1) printPerson 변수를 선언하시오 
//    이 변수의 타입은 함수
//      함수 파라미터 변수는 Person 객체 (Person 객체는 name, age 속성)
//      함수 리턴값 없음
type Person = {
  name: string;
  age: number;
};

// (2) printPerson 변수에 다음 함수를 대입하시오
//       화살표 함수 문법으로 구현한 함수
//          파라미터 변수는 name, age
//          파라미터 값으로 전달된 Persons 객체가 분해되어서 name, age 파라미터 변수에 대입되어야 함.
const printPerson: (person: Person) => void = ({ name, age }) => {
  console.log(`이름: ${name}, 나이: ${age}`);
};

// (3) printPersons 함수를 호출하시오
//        파라미터 값: { name: "홍길동", age: 16 }
const person: Person = { name: "홍길동", age: 16 };
printPerson(person);