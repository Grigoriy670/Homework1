// // #1
// let password = 'password'
// let userPas = prompt('Введите пароль')
// if(UserPas === password ) {
//     alert('Пароль введен верно')
// }
// else{
//     alert('Пароль введен неправильно')
// }


// №2

// let c = 2

// if ( c >= 0 && c <= 10) {
//    alert('Верно') 
    
// } else {
//     alert('Неверно')
    
// }


// №3

// let d = 10
// let e = 101
// if (d >= 100 || e >= 100) {
// alert('Верно')    
// } else {
//     alert('Неверно')
    
// }

// #4

// let a = '2';
// let b = '3';

// alert ( Number(a) + Number(b));

// #5

let monthNumber = 12

switch (monthNumber) {
    case 1:
    case 2:
    case 12:   
    alert('Зима') 
            break;
    case 3:
    case 4:
    case 5:
        alert('Весна')
        break; 
     case 6:
    case 7:
    case 8:
        alert('Лето')
        break; 

     case 9:
    case 10:
    case 11 :
        alert('Осень')
        break;     

    default:
         alert('Неверно')
        break;
}