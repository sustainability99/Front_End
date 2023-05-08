const t = setInterval(move, 20);
// Запускает функцию move каждые 20 миллисекунд
let pos = 0;
let dir = 1;
// let flag = true;
const box = document.getElementById('box');

// clearInterval(t); // остановить функцию setInterval
// function move() {
//     flag ? pos++ : pos--;
//     if (pos == 0 || pos == 150) {
//         flag = !flag;
//     }
//     box.style.left = pos + 'px';
//     box.style.top = pos + 'px';

//     // if (pos === 150) {
//     //     flag = false;
//     // }
//     // if (pos === 0) {
//     //     flag = true;
//     // }
    
//     // if (flag) {
//     //     pos++;
//     // } else {
//     //     pos--;
//     // }
// }
function move() {
    pos += dir; // pos = pos + dir;
    // pos == 0 || pos == 150 ? dir *= -1 : dir;
    if (pos == 0 || pos == 150) {
        dir *= -1; // dir = dir * -1;
    }

    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
}

console.log(new Date());

setInterval (printTime, 1000);

function printTime() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const time = `${h} : ${m} : ${s}`;

    // const timeBox = document.getElementById('time');
    // timeBox.innerText = time;
    const h1 = document.createElement('h1');
    h1.innerText = time;
    if (condition) {
        
    } else {
        
    }

    //TODO Дописать функцию printTime(), чтобы она
    // выводила на экран актуальное время
}

/*
= - присвоение;
== - не строгое сравнение (сравнение значений без учёта типов данных);
=== - строгое сравнение (с учётом типов данных);

1 == '1'; -- true
1 === '1'; -- false

Сложение числа и строки называется конкатинацией.
Результатом будет "слипшаяся" строчка

*/