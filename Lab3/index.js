function str_del(){
    selection = window.getSelection().toString;
    let str = document.getElementById("elem").textContent;
    let start = str.indexOf(selection);
    let end = start + selection.length;
    let result = str.slice(0,start) + str.slice(end);
    document.getElementById("elem").textContent = result;
}

let obj = {
    key: 'value'
};

function getProperty(object, val){
    return val.split('.') // split string based on `.`
    .reduce(function(o, k) {
      return o && o[k]; // get inner property if `o` is defined else get `o` and return
    }, object) // set initial value as object
}

let output = getProperty(obj, "key");
console.log(output);

function getFullName(first,last){
    return first + " " + last;
}

let output1 = getFullName("Vasyl", "Hakman");
console.log(output1);

function getLengthOfWord(word){
    word = word.length;
    return word;
}
let len = getLengthOfWord("Vasyl");
console.log(len);

function getLengthOfTwoWord(word1, word2){
    return word1.length + word2.length;
}
let lenOfTwo = getLengthOfTwoWord("Vasyl", "Hakman");
console.log(lenOfTwo);

function isGreatherThan(num1, num2){
    if(num1<num2) return true;
    else return false;
}
let greathan = isGreatherThan(11,10);
console.log(greathan);

function isEven(num){
    if(num%2===0) return true;
    else return false;
}
let even = isEven(10);
console.log("перевіряє чи є число парним - " + even);

function isSameLenth(word1, word2){
    if(word1.length === word2.length) return true;
    else return false;
}
let sameLength = isSameLenth("word","word");
console.log(sameLength);

function isEvenAndGreatherThanTen(number){
    if(number%2===0&&number>10) return true;
    else return false;
}
let evenAndGreatherThanTen = isEvenAndGreatherThanTen(15);
console.log(evenAndGreatherThanTen);

function computeAreaOfATriangle(a, h){
    return 0.5 * a  * h;
}
let areaOfATriangle = computeAreaOfATriangle(4,6);
console.log(areaOfATriangle);

window.alert("sfgsfg" + (5+9));
window.alert("sgs"+5+9);
