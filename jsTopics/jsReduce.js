function product(a, b) {
    return a * b;
}
arr = new Array(1, 2, 3, 6, 5, 4);

var product_of_arr = arr.reduce(product)
console.log(product_of_arr)