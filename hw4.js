// function min(a, b) {
//     if (a < b) {
//         return a
//     } else {
//         return b
//     }
    
// }

// const min = (a, b) => (a < b) ? a : b

// console.log(min(8, 4))
// console.log(min(6, 6))

// function isEven(n) {
// if (n % 2 == 0) {
//     return 'Число четное'
    
// } 
// else {
//     return 'Число нечетное'
    
// }
// }

// const isEven = (n) => (n % 2 === 0) ? 'Число четное' : 'Число нечетное'

// console.log(isEven(2))
// console.log(isEven(3)) 

// const up = (n) => n ** 2
    
// console.log(up(5))


// function age() {

//     let age = +prompt('Сколько тебе лет?')
//     if (age < 0) {
//        alert ('Вы ввели не правильное значение')
//     }  else if (age >= 0 || age <= 12) {
//         alert('Привет, Друг!') 
//     }
//   else{
//         alert('Добро пожаловать')
// }
// }

// age()

function calc(a, b) {
    console.log(isNaN(a));
    console.log(isNaN(b));
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом'
    } else {
        return a * b
        
    }
}

console.log(calc(5 , 10));