var multi = (a, b) => a * b;
var number = 5;
var array = [0, 1, 2];
var result = multi(number, array[2]);
console.log(result); //10
var result = multi(number, array); 
console.log(result); //  ошибка так как умножение числа на массив есть не явное преобразование объекта к строке
