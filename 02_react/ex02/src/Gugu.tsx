function Gugu() {
  let gugui = [2, 3, 4, 5, 6, 7, 8, 9];
  let guguj = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <table>
      <thead>
        <tr>{gugui.map(i => <td key={i}>{i}단</td>)}</tr>
      </thead>
      <tbody>
          {guguj.map(j => <tr key={j}>{gugui.map(i => <td key={i}>{i} * {j} = {i * j}</td>)}</tr>)}
      </tbody>
    </table>
  );
}

export default Gugu;