var number1 = '10';
var number2 = '20.001';

console.log('With Number Method: ', Number(number1) + Number(number2));
console.log('With parseInt Method: ', Number(number1) + Number(number2)); //Comma separator
console.log('With parseInt Method: '+ ( parseInt(number1) + parseInt(number2) ) ); // Plus(+) concatenation
console.log('With parseInt Method: '+ ( parseFloat(number1) + parseFloat(number2) ) ); // Plus(+) concatenation with parseFloat