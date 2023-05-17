function getFiveInSevenSec() {
    setTimeout(() =>{
        return 5;
    }, 7000);
}

let result = getFiveInSevenSec();
console.log(result);

let promise = new Promise(function (resolved, reject) {
    setTimeout (() =>{
        resolved (5);
    }, 7000);   
})
console.log(promise);

promise.then((value) => {
    let res = console.log(value);
})

let promise2 = new Promise(function (resolved, reject) {
    setTimeout (() =>{
        reject (new Error('Fehler, nichts ist zurückgekommen'));
    }, 7000);   
});

promise2
.then((data)=> {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})

let url = fetch('https://cataas.com/api/cats')
.then((value) => value.json())
.then((data) => console.log(data));