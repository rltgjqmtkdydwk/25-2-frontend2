import Message from './Message';

function App() {
  return (
    <div>
      <Message value="hello world" size={22} />
      <Message value="안녕하세요" color="green" size={20} />
    </div>
  );
}

export default App;


// // practice 정답
// import Message from './Message';

// const App = () =>
//     <div>
//       {['#600', '#800', '#a00', '#b00', '#d00', '#f00'].map((c,i) =>
//       <Message key={c} value="안녕하세요" color={c} size={16+i*4} />)}
//     </div>

// export default App;
