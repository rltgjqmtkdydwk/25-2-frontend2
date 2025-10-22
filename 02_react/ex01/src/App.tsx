function App() {
  const today = new Date().toISOString().slice(0, 10);
  const studentNo = 202214048;
  const name = '김은총';
  return (
    <div>
      <h1>안녕하세요 리액트</h1>
      <p>오늘: { today }</p>
      <table className="info-table" border={ 1 }>
        <tr>
          <td>학번</td><td>{studentNo}</td>
        </tr>
        <tr>
          <td>이름</td><td>{name}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;