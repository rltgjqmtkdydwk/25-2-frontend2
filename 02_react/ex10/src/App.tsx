import CounterUseState from './CounterUseState';
import CounterUseReducer from './CounterUseReducer';
import './App.scss';

function App() {
  return (
    <div id="App">
      <CounterUseState step={2} />
      <br />
      <CounterUseReducer step={3} />
    </div>
  );
}

export default App;