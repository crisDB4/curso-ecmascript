// si todo ha sido resuelto
const promise1 = new Promise((resolve, reject)=> reject("Reject"));
const promise2 = new Promise((resolve, reject)=> resolve("Resolve"));
const promise3 = new Promise((resolve, reject)=> resolve("Resolve"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
/* 
[
  { status: 'rejected', reason: 'Reject' },
  { status: 'fulfilled', value: 'Resolve' },
  { status: 'fulfilled', value: 'Resolve' }
]
*/
// devuelve el valor estado de cada promesa