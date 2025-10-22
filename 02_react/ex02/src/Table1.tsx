function Table1() {
  let persons = [{ name: '홍길동', age: 16 },
                  { name: '임꺽정', age: 19 },
                  { name: '전우치', age: 20 }];
  return (
    <table id='person'>
      <thead>
        <tr><td>이름</td><td>나이</td></tr>
      </thead>
      <tbody>
        {persons.map(p => <tr key={p.name}><td>{p.name}</td><td>{p.age}</td></tr>)}
      </tbody>
    </table>
  );
}

export default Table1;