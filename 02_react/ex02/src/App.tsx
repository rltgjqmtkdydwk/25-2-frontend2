// 예제7
// import './App.css';
// const App = () =>
//   <div>{[1,2,3,4].map(i => <span key={i}>{i * 10}</span>)}</div>
// export default App;

import './App.css';
import Table1 from './Table1';
import Gugu from './Gugu';

function App() {
  return (
    <div>
      <h1>안녕하세요 리액트</h1>
      <Table1 />
      <Gugu/>
    </div>
  );
}

export default App;