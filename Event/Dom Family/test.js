// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// console.log(document.body.lastElementChild);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('#current').nextElementSibling);
// console.log(document.querySelector('#current').previousElementSibling);
// console.log(document.body.childNodes);

// for (const node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue
//     } else{
//         console.log(node);
//     }
// }

// function fact(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//        result *= i
//     }
//     return result
// }

// console.log(fact(6));

// function fact(n) {
//     if (n == 1) {
//         return n;
//     } else {
//         return n * fact(n-1)
//     }
// }
// console.log(fact(6));

// n = 6 => 720
// 6 * 120 = 720
// 5 * 24 = 120
// 4 * 6 = 24
// 3 * 2 = 6
// 2 * 1 = 2



function pow(a, b) {
   if (b == 1) {
    return a
   } else {
    return a * pow(a, b - 1)
   }
}

console.log( pow(2, 5));



