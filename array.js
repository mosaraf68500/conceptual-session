const array=[23,23,45,67,12];
console.log(array);
for(const arr of array){
    console.log(arr);
}

// console.log(...array);

const array2=[...array];

console.log(array2);

array2.push(89);

console.log(array2);