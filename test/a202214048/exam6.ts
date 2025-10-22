let a = [
  {id:1, title: "초코파이", price: 1000},
  {id:2, title: "우유", price: 2000},
  {id:3, title: "맥주", price: 5000}
];

const deleteProduct = (
  arr: { id: number; title: string; price: number }[],
  id: number
): { id: number; title: string; price: number }[] => {
  return arr.filter(item => item.id !== id);
};

const updatePrice = (
  arr: { id: number; title: string; price: number }[],
  id: number,
  newPrice: number
): { id: number; title: string; price: number }[] => {
  return arr.map(item =>
    item.id === id ? { ...item, price: newPrice } : item
  );
};

console.log(deleteProduct(a, 1));
console.log(updatePrice(a, 1, 1100));
