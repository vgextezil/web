function findMinLengthOfThreeWords(word1,word2,word3){
    let len1 = word1.length;
    let len2 = word2.length;
    let len3 = word3.length;
    if(len1<=len2&&len1<=len3)return len1;
    if(len2<=len1&&len2<=len3)return len2;
    else return len3;
}
let minLengthOfThreeWords = findMinLengthOfThreeWords("aaa","aa","aaa");
console.log("1: " + minLengthOfThreeWords);

function filterOddElements(arr){
    let arr1 = [];
    arr.forEach(element => {
        if(element%2!==0) arr1.push(element);
    });
    return arr1;
}
let oddElements = filterOddElements([1,2,3,4,5]);
console.log(oddElements);

function getLengthOfShortestElement(arr){
    let min = arr[0].length;
    arr.forEach(element => {
        if(element.length<min) min = element.length;
    });
    return min;
}
let lengthOfShortestElement = getLengthOfShortestElement(["one","two","tree"]);
console.log(lengthOfShortestElement);

function joinArrayOfArrays(arr1,arr2,arr3){
    return arr1.concat(arr2).concat(arr3);
}
let arrayOfArrays = joinArrayOfArrays(["one","two"],[1,2],[true,false]);
console.log(arrayOfArrays);

function findSmallestNumberAmongMixedElements(arr){
    if(arr.length==0)return 0;
    let flag = false;
    let min;
    arr.forEach(element => {
        if(Number.isInteger(element)){
            flag = true;
            min = element;
        } 
    });
    if(flag==false) return 0;
    arr.forEach(element => {
        if(Number.isInteger(element)==true){
            if(element<min){
                min = element;
            }
        }
    });
    return min;
}
console.log(findSmallestNumberAmongMixedElements([4,"linkoln", 9, "octopus"]));

function computeSummationToN(max){
    sum = 0;
    for (let index = 1; index <= max; index++) {
        sum = sum + index;
    }
    return sum;
}
console.log(computeSummationToN(6));

function convertScoreToGrade(number){
    if (number <= 100 && number>=90)return "A";
    if (number <= 89 && number>=82)return "B";
    if (number <= 81 && number>=75)return "C";
    if (number <= 74 && number>=69)return "D";
    if (number <= 68 && number>=60)return "E";
    if (number <= 59 && number>=35)return "Fx";
    if (number <= 34 && number>=0)return "F";
    if(number>100 || number <0) return "INVALID SCORE";
    
}
console.log(convertScoreToGrade(56));

function getLongestOfThreeWords(arr){
    if(arr.length<=1) return 0;
    min = arr[0];
    arr.slice().reverse()
    .forEach(function(item) {
            if(item.length<min.length) min = item;
        });
    return min;
}
console.log(getLongestOfThreeWords(["aaa","bbb","ccc"]))

function multiply(num1, num2){
    if(num2===0) return 0;
    return num1 / (1 / num2);
}
console.log(multiply(5,5))

function computeSumBetween(a, b) {
    if (a > b) {
      return 0;
    }
    let sum = 0;
    for (let i = a; i < b; i++) {
      sum += i;
    }
    return sum;
  }

  console.log(computeSumBetween(2,5))