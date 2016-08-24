//first function that pushes to Array

function range(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {

        arr.push(i);
    }
    return arr;
}

// second funtion to sum Array


function sum(range) {
    var total = 0;
    for (i = 0; i < range.length; i++) {
        total += range[i]
    }
    return total
}



// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
