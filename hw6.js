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