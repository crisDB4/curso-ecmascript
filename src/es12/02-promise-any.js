const promise1 = new Promise((resolve, reject)=> reject("Reject"));
const promise2 = new Promise((resolve, reject)=> resolve("Resolve"));
const promise3 = new Promise((resolve, reject)=> resolve("Resolve"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));
/*
tenemos una serie de promesas y queremos ver cual sucedio primero
si es reject la ignora
se pueden llamar varias APIs
*/