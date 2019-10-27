const vegetables = ['potato', 'tomato', 'cucumber'];
const fruits = ['apple', 'pineapple','banana'];

if (vegetables.indexOf('cucumber') != -1) {
   console.log('vegetables')
} else if (fruits.indexOf('cucumber') != -1) {
   console.log('fruits')
} else {
   console.log('not in array')
}

switch (true) {
    case (vegetables.indexOf('cucumber') != -1):
        console.log('vegetables')
        break;
    case (fruits.indexOf('cucumber') != -1):
        console.log('fruits')
        break;
    default: 
        console.log('not in array')
}
