const strings = 'js'
console.log(strings.toUpperCase());

function filter(arr,str) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase().startsWith(str.toLowerCase())){
        result.push(arr[i])
    }
}
    return result;
}
console.log(filter(['JavaScript', 'Python', 'Java'],'ja'));


const roundNumber = 32.58884;

console.log(Math.floor(roundNumber));
console.log(Math.round(roundNumber));
console.log(Math.ceil(roundNumber));


console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32))


function getRandomsNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomsNumber());


function getRandomNumber(num) {
    let arr = [];
    for(let i = 0; i < num; i++) {
        return Array.from( {length: Math.floor(num / 2)}, () => Math.floor(Math.random() * num) )
    }
    
}
console.log(getRandomNumber(10));


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (min - max + 1)) + min
    
}
console.log(getRandomInt(15, 10));

 console.log(new Date());