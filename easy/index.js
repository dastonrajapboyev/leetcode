function removeDuplicate(d) {
  // let filtered = d.filter((value, index) => d.indexOf(value) === index);
  // return filtered.length;

  // let len = 0;
  // for (let i = 0; i < d.length; i++) {
  //   if (d[i] !== d[i]) {
  //     len++;
  //   }
  // }
  // return len;

  let arr = [];
  let filtered = d.filter((value, index) => d.indexOf(value) === index);
  d = arr.push(...filtered);
  return d;
}

removeDuplicate([0, 5, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// =================

//@return {Function}

// var createHelloWorld = function () {
//   return function func(...args) {
//     return "Hello World";
//   };
// };
// console.log(createHelloWorld()());

// ==========================
// 2727. Is Object Empty
// var isEmpty = function (obj) {
//   return Object.keys(obj).length === 0;
// };
// console.log(isEmpty({ x: 5, y: 42 }));

// ===============================

// 2703. Return Length of Arguments Passed

// var argumentsLength = function (...args) {
//   return args.length;
// };

// console.log(argumentsLength(1, {}, null, "3"));

// ==========================
