let min = 100;
document.getElementById("min").innerHTML = min;

let sum = 0
let time = performance.now();
for (let i = 0; i <= 1000000; i++) {
    sum += i;
};
time = performance.now() - time;
document.getElementById("min").innerHTML = time;
document.write("<p>Сумма чисел от 1 до 100000 составляет</p>" + sum)