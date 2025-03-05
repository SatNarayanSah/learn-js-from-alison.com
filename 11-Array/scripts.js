let scores = [10, 20, 30];
let i = 0;
while (i < scores.length) {
  scores[i]++;
  i++;
}
console.log(scores);
for (let i = 0; i < scores.length; i++) {
  scores[i]++;
}
console.log(scores);

scores.forEach(function (entry, index) {
  //note: in foreach method the fiest parameter is alwyas entry copy data of an array and second parameter is index number of an array
  scores[index]++;
});
console.log(scores);
