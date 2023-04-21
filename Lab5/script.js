function computeAreaOfARectangle(side1, side2){
    return side1*side2;
}
console.log(computeAreaOfARectangle(4,8));//32

function computeAreaOfACircle(r){
    return Math.PI*Math.pow(r,2);
}
console.log(computeAreaOfACircle(4));

function computePower(base, exponent){
    return Math.pow(base,exponent);
}
console.log(computePower(2,3));

function computeSquareRoot(number){
    return Math.sqrt(number)
}
console.log(computeSquareRoot(9))

function joinArrays(arr1,arr2){
    return arr1.concat(arr2);
}
console.log(joinArrays([1,2],[3,4]));

var obj = {
    key: [1,2,3,4]
};

function getProductOfAllElementsAtProperty(object,key){
    
    if(object.key === undefined) return 0;
    if(object.key.length===0) return 0;
    if(Array.isArray(object.key)===false) return 0;
    else{
        let dobutok = 1;
        object.key.forEach(element => {
            dobutok*=element
        });
        return dobutok;
    }
}
console.log(getProductOfAllElementsAtProperty(obj,'key'));

function sumDigits(number){
    let sum = 0;
    let flag = false;
    if (number<0){
        number = Math.abs(number);
        flag = true;
    }
    while(number>10){
        let digit = number % 10;
        sum +=digit;
        number /= 10;
        number = Math.floor(number);
    }
    if(flag===true){
        number *= -1;
        sum += number;
    }
    else sum += number;
    return sum;
}
console.log(sumDigits(-996));

function findShortestWordAmongMixedElements(words){
    if(words.length ===0) return "";
    let flag = false;
    words.forEach(element => {
        if(typeof element ==="string") flag = true;
    });
    if(flag===false) return "";
    let word;
    let min;
    words.forEach(element => {
        if(typeof element ==="string"){
            word = element;
            min = element.length;
            return false;
        }
    });
    words = words.reverse();
    words.forEach(element => {
        if(element.length <min){
            word = element;
            min = element.length;
        }
    });
    return word;
}
console.log(findShortestWordAmongMixedElements([4, 'two', 2, "three"]))

function findSmallestNumberAmongMixedElements(numbers){
    if(numbers.length ===0) return "";
    let flag = false;
    numbers.forEach(element => {
        if(typeof element === "number") flag = true;
    });
    if(flag===false) return "";
    let number;
    let min;
    numbers.forEach(element => {
        if(typeof element ==="number"){
            number = element;
            min = element.length;
            return false;
        }
    });
    numbers = numbers.reverse();
    numbers.forEach(element => {
        if(element.length <min){
            number = element;
            min = element.length;
        }
    });
    return number;
}
console.log(findSmallestNumberAmongMixedElements([4, 'lincoln', 2, "octopus"]))

function modulo(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return NaN;
    }
    let result = a;
    while (result >= b) {
      result -= b;
    }
    return result;
}
console.log(modulo(25,4));

function flipEveryNChars(str, ch){
    let newStr = str.split("");
    let i = 0;
    let newStr1 = [];
    let temp = [];
    let size = str.length/ch;
    for (let index = 0; index < size; index++) {
        for (let index1 = 0; index1 < ch; index1++) {
            temp[index1] = newStr[i];
            i++;
        }
        newStr1[index] = temp.reverse().join('');
    }
    return newStr1.join('');
}
console.log(flipEveryNChars("a short example",5));

function detectOutLierValue(str){
let evenCount = 0; 
let oddCount = 0;
let uniqueNumber = 0;
let uniqueNumber2 = 0;

str.split(" ").forEach(element => {
    if (parseInt(element)% 2 === 0) {
        evenCount++;
        uniqueNumber = parseInt(element);
      } else {
        oddCount++;
        uniqueNumber2 = parseInt(element); 
      }
});

if (evenCount === 1) {
  console.log("Знайдено єдине парне число: " + uniqueNumber);
} else if (oddCount === 1) {
  console.log("Знайдено єдине непарне число: " + uniqueNumber2);
} else {
  console.log("У рядку немає єдиного парного або непарного числа.");
}
}
detectOutLierValue("1 3 7 8 9");

function findPairForSum(arr,sum){
    for (let index = 0; index < arr.length-1; index++) {
        for (let index1 = index+1; index1 < arr.length; index1++) {
            if(arr[index]+arr[index1]===sum){
                let output = [arr[index],arr[index1]];
                return output;
            }
        }
    }
}
console.log(findPairForSum([3,34,4,12,5,2],9));

function glassString(str1,str2){
    let newStr1 = str1.split("").reverse();
    let newStr2 = str2.split("");
    console.log(newStr1);
    console.log(newStr2);
    if(newStr1.toString() === newStr2.toString())return true;
    else return false;
}
console.log(glassString("hello world","dlrow olleh"));

function binarySearch(arr,x){
    let start=0, end=arr.length-1;
    while (start<=end){
        let mid=Math.floor((start + end)/2);
        if (arr[mid]===x) return mid;
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
    return false;
}
console.log(binarySearch([1,3,16,22,31,33,34],31));

function isIsogram(word){
    word = word.toLowerCase();
    for (let index = 0; index <word.length - 1; index++) {
        for (let index1 = index + 1; index1 < word.length; index1++) {
            if(word[index] === word[index1]){
                return false;
            }           
        }
    }
    return true;
}
console.log(isIsogram("helo"));

function isPalindrom(word){
    word = word.split("");
        for (let index = 0; index < word.length/2; index++) {
            if(word[index] !=word[word.length-1-index]) return false;
        }
        return true;
}
console.log(isPalindrom("ara"))
