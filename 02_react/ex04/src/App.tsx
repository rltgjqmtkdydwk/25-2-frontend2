import './App.css';
import type { Person } from './commonType.ts';
import PersonList from './PersonList';

let persons: Person[] = [
  {name: '홍길동', age: 16},
  {name: '임꺽정', age: 19},
  {name: '전우치', age: 20}];

function App() {
  return (
    <div>
      <h1>목록</h1>
      <PersonList persons={persons} />
    </div>
  );
}

export default App;