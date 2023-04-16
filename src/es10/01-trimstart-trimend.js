const hello = '       Hello world!              ';

console.log(hello.trimStart()); // quita los espacios del comienzo del string
// 'Hello world!        '
console.log(hello.trimEnd()); // quita los espacios del final del string
// '        Hello world!'
console.log(hello.trim()); // quita los espacios del comienzo y el final del string
// 'Hello world!'