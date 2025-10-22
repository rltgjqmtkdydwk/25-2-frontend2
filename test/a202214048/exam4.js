let a = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 5);

console.log(a);

console.log(a.filter(n => n % 2 === 0).length);

console.log(a.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0));

let b = a.map(n => (n % 2 === 1 ? n + 1 : n));
console.log(b);
