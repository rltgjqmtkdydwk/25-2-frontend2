// sortPersons 함수 구현
// (1) sortPersons 변수를 선언하시오. 이 변수의 타입은 함수.
//      함수 파라미터 변수는 Persons 객체 배열 (Person 객체는 name, age 속성)
//      함수 리턴값도 Persons 객체 배열
type Person = {
  name: string;
  age: number;
};

// (2) sortPersons 변수에 다음 함수를 대입하시오
//       화살표 함수 문법으로 구현한 함수
//          파라미터 변수로 받은 Persons 배열을 name 속성값 오름차순으로 정렬하여 리턴
const sortPersons: (persons: Person[]) => Person[] = (persons) => {
  return persons.sort((a, b) => a.name.localeCompare(b.name));
};

// (3) sortPersons 함수를 호출하시오
//       리턴값을 화면에 출력
//       파라미터 값: [{ name: "홍길동", age: 16 },
//                    { name: "임꺽정", age: 18 },
//                    { name: "전우치", age: 19 }];
const persons: Person[] = [
  { name: "홍길동", age: 16 },
  { name: "임꺽정", age: 18 },
  { name: "전우치", age: 19 },
];
console.log(sortPersons(persons));