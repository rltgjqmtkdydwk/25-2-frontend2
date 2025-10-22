type Props = {value: string, color?: string, size?: number};

function Message({value, color="blue", size=20}: Props) {
  const st = {color, margin: "0.5em", fontSize: size};
  return <div style={st}>{value}</div>;
}

export default Message;