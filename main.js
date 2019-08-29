let array = [235, -439, 1357,124, 678, 357, 573];
let str = '';
let array1 = [];

function changeString() {
    for (let i = 0; i < array.length; i++) {
        str = array[i].toString();
        check();
    }
    let max = array1[0];
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] > max) {
            max = array1[i];
        }
    }
    return document.write("Max is " + max);
}

function check() {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ((str[i] % 2) != 0) {
            count++;
        }
    }
    if (count == str.length) {
        array1.push(Number(str));
    }
}

changeString();


