type Props = {value: string, index: number; color?: string, size?: number};
let colors = ['#600', '#800', '#a00', '#b00', '#d00', '#f00'];
let sizes = [20, 25, 30, 35, 40, 45];

function Practice({value, index, color, size}: Props) {
    const finalColor = color ?? colors[index % colors.length];
    const finalSize = size ?? sizes[index % sizes.length];

    const st = {color: finalColor, margin: "0.5em", fontSize: finalSize};
    return <div style={st}>{value}</div>;
}

export default Practice;


