//1
function getArea1(rectangle) {
    console.log(rectangle.w * rectangle.h * 1/2);
}
getArea1(rectangle);

function getArea2({w, h}) {
    console.log(w*h/2);
}
let rectangle = {w:10, h:15};
getArea2(rectangle);

//2
function getSumAndAverage(...numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    let avg = sum/numbers.length;
    console.log([sum, avg]);
}
getSumAndAverage(1, 2, 3, 4, 5, 6);