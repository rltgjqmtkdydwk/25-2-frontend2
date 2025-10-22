import type { Person } from './commonType.ts';

function TableHead() {
  return (
    <thead>
      <tr><td>이름</td><td>나이</td></tr>
    </thead>
  );
}

type Props = { persons: Person[] }; // PersonList 컴포넌트의 props 객체 타입 선언.

type PersonItemProps = {person: Person};

function PersonItem(props: PersonItemProps) { // PersonItem 컴포넌트
    const {name, age} = props.person; // props 값으로 전달된 person 객체의 이름과 나이를 꺼낸다
    return <tr><td>{name}</td><td>{age}</td></tr>;
}

function PersonList({ persons }: Props) {
  // 구조분해 할당 문법으로 선언한 파라미터 변수 persons.
  // persons 변수명은 persons 속성명과 일치해야 한다.
  return (
    <table>
      <TableHead />
      <tbody>
       {persons.map(p => <PersonItem key={p.name} person={p} />)}
      </tbody>
    </table>
  );
}

export default PersonList;