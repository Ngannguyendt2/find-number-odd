let array = [235, -439, 124, 678, 357, 573];
let num1 = [];
let num2 = [];
let num3 = [];
let num4 = [];
let array1 = [];
let max = 0;

function insertNumber() {
    for (let i = 0; i < array.length; i++) {
        num1[i] = array[i] % 100;
        num2[i] = Math.floor(array[i] / 100);
        num3[i] = num1[i] % 10;
        num4[i] = Math.floor(num1[i] / 10);
    }
}

insertNumber();

function check() {
    for (let i = 0; i < array.length; i++) {
        if ((num3[i] % 2) != 0 && (num4[i] % 2) != 0 && (num2[i] % 2) != 0) {
            array1.push(array[i]);
        }
    }
    return array1;
}

function findMax() {
    check();
    max = array1[0];
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] > max) {
            max = array1[i];
        }

    }
    document.write("Max is: " + max);
}


