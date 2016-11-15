// Homework 3

// написать аналоги методов для работы с массивами:
// forEach, filter, map, slice, reduce, splice  пример:
// let array = [1, 2, 3, 4, 5, 6];
// forEach(array, item => console.log(item));
// let greaterThan4 = filter(array, item => item > 4);
// let sqare = map(array, item => item*item);
// Реализация функции splice является задачей со звездочкой.
// Ее выполнение не обязательно, но желательно.

// forEach
let array = [1, 2, 3, 4, 5, 6, 'маша, петя', 1, 2, 3, 4, 5, 6];
let array2 = [];
let array3 = '';
let array4 = 228;

function forEach( arraySource, screenLog ) {

    let arraySourceLength = arraySource.length;

    if ( arraySourceLength === 0 || !Array.isArray(arraySource) ) {
        throw new Error('NOT_ARRAY');
    } else {
        for (let i = 0; i < arraySourceLength; i++ ) {
            screenLog(i, arraySource[i], arraySource);
        }
    }

};

forEach(array, (index, value, originalArray) => console.log(index, value));  // return each items of array
console.log('------');
try {
    forEach(array2, (index, value, originalArray) => console.log(index, value));  // return error message
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
console.log('------');
try {
    forEach(array3, (index, value, originalArray) => console.log(index, value));  // return error message
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
console.log('------');
try {
    forEach(array4, (index, value, originalArray) => console.log(index, value));  // return error message
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
// forEach end
