var add = (val1, val2, addTwoNumbers) => {
    console.log(addTwoNumbers(val1, val2));
}

var addFunc = add(1, 2, (val1, val2) => {
    return val1+val2;
})