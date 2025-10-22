let p1 = { x: 10, y: 10, z: 10 };
let p2 = { ...p1, x: 11 };
let p3 = { ...p2, y: p2.y + 1 };

console.log(p2, p3);