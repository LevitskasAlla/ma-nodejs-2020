const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 0];
const rezult = [];
first.reverse();
second.reverse();
for( i=0; i<first.length; ++i){
   rezult.push(first[i])
   rezult.push(second[i])
}
console.log(rezult);
