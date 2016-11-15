// Homework 3

// написать аналоги методов для работы с массивами:
// forEach, filter, map, slice, reduce, splice  пример:
// let array = [1, 2, 3, 4, 5, 6];
// forEach(array, item => console.log(item));
// let greaterThan4 = filter(array, item => item > 4);
// let sqare = map(array, item => item*item);
// Реализация функции splice является задачей со звездочкой.
// Ее выполнение не обязательно, но желательно.

// variables
let array = [1, 2, 3, 4, 5, 6, 'маша, петя', 1, 2, 3, 4, 5, 6];
let array2 = [];
let array3 = '';
let array4 = 228;
// variables end

// forEach
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

console.log('---= end forEach =---');

// filter
function filter( arraySource, conditionFunc ) {
    let arraySourceLength = arraySource.length;
    let outArray = [];

    if ( arraySourceLength === 0 || !Array.isArray(arraySource) ) {
        throw new Error('NOT_ARRAY');
    } else {
        for (let i = 0; i < arraySourceLength; i++ ) {
            if ( conditionFunc(arraySource[i]) ) {
                outArray[outArray.length] = arraySource[i];
            }
        }
    }

    return outArray;
}; //filter

try {
    let greaterThan4 = filter(array, (element) => element > 4);
    console.log(greaterThan4);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let greaterThan4_2 = filter(array2, (element) => element > 4);
    console.log(greaterThan4_2);  // return filtered array
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let greaterThan4_3 = filter(array3, (element) => element > 4);
    console.log(greaterThan4_3);  // return filtered array
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let greaterThan4_4 = filter(array4, (element) => element > 4);
    console.log(greaterThan4_4);  // return filtered array
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
// filter end

console.log('---= end filter =---');

//map

function map( arraySource, conditionFunc ) {
    let arraySourceLength = arraySource.length;
    let outArray = [];

    if ( arraySourceLength === 0 || !Array.isArray(arraySource) ) {
        throw new Error('NOT_ARRAY');
    } else {
        for (let i = 0; i < arraySourceLength; i++ ) {
            outArray[i] = conditionFunc(arraySource[i])
        }
    }

    return outArray;
}; //filter

try {
    let sqare = map(array, item => item*item);
    console.log('mapped array', sqare);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let sqare = map(array2, item => item*item);
    console.log('mapped array', sqare);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let sqare = map(array3, item => item*item);
    console.log('mapped array', sqare);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}
try {
    let sqare = map(array4, item => item*item);
    console.log('mapped array', sqare);
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    }
}



//map end
