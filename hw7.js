const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

people.sort((a, b) => {
return a.age - b.age
})

console.log(people);

function isPositive(num) {
    return num > 0;
}
function isMale(person) {
    return person.gender === 'male'
}
function filter( array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (ruleFunction(array[i])) {
        result.push(array[i]);
      }
        
    } return result
}  

console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peoples, isMale));


const interValid = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
    clearTimeout(interValid)
    console.log('Время прошло');
}, 30000);


function delayForSecond(callback) {
    setTimeout (callback, 2000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})