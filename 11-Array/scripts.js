let scores = [10, 20, 30];
let i = 0;
while (i < scores.length) {
  scores[i]++;
  i++;
}
// console.log(scores);
for (let i = 0; i < scores.length; i++) {
  scores[i]++;
}
// console.log(scores);

scores.forEach(function (entry, index) {
  //note: in foreach method have 3 paramets the first parameter is alwyas entry copy data of an array and second parameter is index number of an array and the last one is the array
  scores[index]++;
});
// console.log(scores);




// multidimension array

let a = [[1,2,3], [4,5,6,7]]
a[1][2]=100
console.log(a[1][2])