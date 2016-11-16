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

// // forEach
// function forEach( arraySource, screenLog ) {
//
//     let arraySourceLength = arraySource.length;
//
//     if ( arraySourceLength === 0 || !Array.isArray(arraySource) ) {
//         throw new Error('NOT_ARRAY');
//     } else {
//         for (let i = 0; i < arraySourceLength; i++ ) {
//             screenLog(i, arraySource[i], arraySource);
//         }
//     }
//
// };
//
// forEach(array, (index, value, originalArray) => console.log(index, value));  // return each items of array
// try {
//     forEach(array2, (index, value, originalArray) => console.log(index, value));  // return error message
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// try {
//     forEach(array3, (index, value, originalArray) => console.log(index, value));  // return error message
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// try {
//     forEach(array4, (index, value, originalArray) => console.log(index, value));  // return error message
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// // forEach end
//
// console.log('---= end forEach =---');
//
// // filter
// function filter( arraySource, conditionFunc ) {
//     let arraySourceLength = arraySource.length;
//     let outArray = [];
//
//     if ( arraySourceLength === 0 || !Array.isArray(arraySource) ) {
//         throw new Error('NOT_ARRAY');
//     } else {
//         // использую ранее написанный forEach, вместо for...
//         forEach(arraySource, (index, value, originalArray) => {
//             if ( conditionFunc(arraySource[index]) ) {
//                     outArray[outArray.length] = arraySource[index];
//             }
//         })
//     }
//
//     return outArray;
// }; //filter
//
// try {
//     let greaterThan4 = filter(array, (element) => element > 4);
//     console.log(greaterThan4);
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// try {
//     let greaterThan4_2 = filter(array2, (element) => element > 4);
//     console.log(greaterThan4_2);  // return filtered array
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// try {
//     let greaterThan4_3 = filter(array3, (element) => element > 4);
//     console.log(greaterThan4_3);  // return filtered array
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// try {
//     let greaterThan4_4 = filter(array4, (element) => element > 4);
//     console.log(greaterThan4_4);  // return filtered array
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// // filter end
//
// console.log('---= end filter =---');
//
// //map
// function map( arraySource, conditionFunc ) {
//     let arraySourceLength = arraySource.length;
//     let outArray = [];
//
//     if ( arraySourceLength === 0 || !Array.isArray(arraySource) ) {
//         throw new Error('NOT_ARRAY');
//     } else {
//         for (let i = 0; i < arraySourceLength; i++ ) {
//             outArray[i] = conditionFunc(arraySource[i])
//         }
//         // использую ранее написанный forEach, вместо for...
//         forEach(arraySource, (index, value, originalArray) => {
//             outArray[index] = conditionFunc(arraySource[index])
//         })
//
//     }
//
//     return outArray;
// }; //map
//
// try {
//     let sqare = map(array, item => item*item);
//     console.log('mapped array', sqare);
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// try {
//     let sqare = map(array2, item => item*item);
//     console.log('mapped array', sqare);
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// try {
//     let sqare = map(array3, item => item*item);
//     console.log('mapped array', sqare);
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// try {
//     let sqare = map(array4, item => item*item);
//     console.log('mapped array', sqare);
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// //map end
//
// console.log('---= end map =---');
//
// // slice
// function slice( arraySource, begin, end ) {
//     let arraySourceLength = arraySource.length;
//     let outArray = [];
//     let beginParam = begin || 0;
//     let endParam = end || arraySourceLength;
//
//     if ( arraySourceLength === 0 || !Array.isArray(arraySource) ) {
//         throw new Error('NOT_ARRAY');
//     } else {
//         // if end and begin equal
//         if ( endParam === beginParam ) {
//             return outArray;
//         }
//         // begin condition
//         if ( beginParam < 0 ) {
//             if ( Math.abs(beginParam) > arraySourceLength ) {
//                 return outArray;
//             } else {
//                 beginParam = arraySourceLength + beginParam;
//             }
//         }
//         // end condition
//         if ( endParam < 0 ) {
//             endParam = arraySourceLength + endParam;
//         }
//         // out of range condition
//         if ( endParam < beginParam || endParam > arraySourceLength || beginParam > arraySourceLength ) {
//             return outArray;
//         } else {
//             for (let i = beginParam; i < endParam; i++ ) {
//                 outArray[outArray.length] = arraySource[i];
//             }
//         }
//     }
//
//     return outArray;
// }; //slice
//
// try {
//     let slice1 = slice(array, 2, -100 );
//     let sliceEtalon = array.slice( 2, -100 )
//     console.log('slice etalon', sliceEtalon);
//     console.log('slice array', slice1);
//     console.log('-------');
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// try {
//     let slice1 = slice(array2, 2, -1 );
//     console.log('slice array', slice1);
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// try {
//     let slice1 = slice(array3, 2, -1 );
//     console.log('slice array', slice1);
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// try {
//     let slice1 = slice(array4, 2, -1 );
//     console.log('slice array', slice1);
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     }
// }
// // slice end
//
// console.log('---= slice end =---');
//
// // reduce
// let testReduceArray = [[0, 1], [2, 3], [4, 5]];
//
// function reduce( arraySource, callbackReduce, initialValue ) {
//     let arraySourceLength = arraySource.length;
//     let outParam;
//     let init = initialValue;
//
//     // Если массив пустой и аргумент initialValue не указан, будет брошено исключение TypeError.
//     if ( arraySourceLength === 0 || !Array.isArray(arraySource) && !init && init !== 0 ) {
//         throw new Error('NOT_ARRAY');
//     }
//     //  если аргумент initialValue указан, но массив пустой, то будет возвращено одно это значение, без вызова функции callback.
//     else if ( arraySourceLength === 0 || !Array.isArray(arraySource) && init || init === 0 ) {
//         return init;
//     }
//     else {
//         let n = 0;
//         let onceElemOfArray = 0;
//         let counter = 0;
//
//         //Если массив состоит только из одного элемента (независимо от его положения в массиве) и аргумент initialValue не указан,
//         // то будет возвращено одно это значение, без вызова функции callback.
//         for (let i=0; i < arraySourceLength; i++ ) {
//             if ( arraySource[i] ) {
//                 ++n;
//                 onceElemOfArray = arraySource[i];
//             }
//         }
//
//         if ( n === 1 && !init && init !== 0 ) {
//             return onceElemOfArray;
//         }
//
//         // Если при вызове reduce()
//         // передан аргумент initialValue, то значение previousValue будет
//         // равным значению initialValue, а значение currentValue будет равным
//         // первому значению в массиве.
//         if ( init || init === 0 ) {
//             let currentValue = arraySource[0];
//             let i = 0;
//             ++counter;
//             outParam = callbackReduce( init, currentValue, i, arraySource );
//         } else
//         // Если аргумент initialValue не задан,
//         // то значение previousValue будет равным первому значению в массиве,
//         // а значение currentValue будет равным второму значению в массиве.
//         if ( !init && init !== 0 ) {
//             init = arraySource[0];
//             let currentValue = arraySource[1];
//             let i = 1;
//             counter += 2;
//             outParam = callbackReduce( init, currentValue, i, arraySource );
//         }
//
//         // exec reduceCallback с учетом счетчика counter
//
//         function reduceArrayElement(  ) {
//             if ( arraySource[counter] ) {
//                 outParam = callbackReduce( outParam, arraySource[counter], counter, arraySource );
//                 ++counter;
//                 reduceArrayElement(  );
//             }
//         } //reduceArrayElement
//         reduceArrayElement(  );
//     }
//
//     return outParam;
// }; //reduce
//
// try {
//     let reduce1 = reduce(testReduceArray, (previousValue, currentValue, index, array) => { return previousValue.concat(currentValue) });
//     let reduceEtalon = testReduceArray.reduce( (previousValue, currentValue, index, array) => { return previousValue.concat(currentValue) });
//     console.log('reduce TEST array', reduce1);
//     console.log('reduce TEST etalon', reduceEtalon);
//     console.log('-------');
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     } else {
//         console.error('Ошибка!');
//         console.dir(e);
//     }
// }
// try {
//     let reduce1 = reduce(array, (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 );
//     let reduceEtalon = array.reduce( (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 )
//     console.log('reduce array', reduce1);
//     console.log('reduce etalon', reduceEtalon);
//     console.log('-------');
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     } else {
//         console.error('Ошибка!');
//         console.dir(e);
//     }
// }
// try {
//     let reduce1 = reduce(array2, (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 );
//     let reduceEtalon = array2.reduce( (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 )
//     console.log('reduce array2', reduce1);
//     console.log('reduce etalon2', reduceEtalon);
//     console.log('-------');
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     } else {
//         console.error('Ошибка!');
//         console.dir(e);
//     }
// }
// try {
//     let reduce1 = reduce(array3, (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 );
//     let reduceEtalon = array3.reduce( (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 )
//     console.log('reduce array3', reduce1);
//     console.log('reduce etalon3', reduceEtalon);
//     console.log('-------');
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     } else {
//         console.error('Ошибка!');
//         console.dir(e);
//     }
// }
// try {
//     let reduce1 = reduce(array4, (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 );
//     let reduceEtalon = array4.reduce( (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 )
//     console.log('reduce array4', reduce1);
//     console.log('reduce etalon4', reduceEtalon);
//     console.log('-------');
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     } else {
//         console.error('Ошибка!');
//         console.dir(e);
//     }
// }
// // reduce end

console.log('---= reduce end =---');

// splice
let testSpliceArrayMy = ['ангел', 'клоун', 'мандарин', 'хирург'];
let testSpliceArrayEtalon = ['ангел', 'клоун', 'мандарин', 'хирург'];

function splice( arraySource, begin, deleteC ) {
    let arraySourceObj = arraySource;
    let arraySourceLength = arraySource.length;
    // проверка на существование массива
    if ( arraySourceLength === 0 || !Array.isArray(arraySource) ) {
        throw new Error('NOT_ARRAY');
    } // проверка на существование массива

    let relativeStart = begin;
    function isInteger(num) {
      return (num ^ 0) === num;
    }
    if (!isInteger(relativeStart)) {
        throw new Error('NOT_INTEGER');
    };

    let actualStart;
    if ( relativeStart < 0 ) {
        actualStart = Math.max((arraySourceLength + relativeStart),0);
    } else (
        actualStart = Math.min(relativeStart, arraySourceLength);
    )

    let insertCount;
    let actualDeleteCount;
    let itemArguments = arguments;
    if ( itemArguments.length === 1 ) {
        insertCount = 0;
        actualDeleteCount = 0;
    } else if ( itemArguments.length === 2 ) {
        insertCount = 0;
        actualDeleteCount = arraySourceLength - actualStart;
    } else {
        insertCount = itemArguments.length - 3;
        let dc = deleteC;
        if (!isInteger(dc)) {
            throw new Error('NOT_INTEGER');
        };
        actualDeleteCount = Math.min(Math.max(dc,0), arraySourceLength - actualStart);
    }

    // 2E53 не делаем;)

    // bufferArray
    let bufferArray = new Array(arraySourceObj, actualDeleteCount);
    for ( let i = 0; i < actualDeleteCount; i++ ) {
        let from = actualStart + i + '';
        let fromPresent = arraySourceObj.hasOwnProperty(from);
        if ( fromPresent ) {
            bufferArray[i] = arraySourceObj[actualStart + i];
        }
    }

    let items = slice(itemArguments, 3, itemArguments.length );
    let itemsCount = items.length;

    if ( itemsCount < actualDeleteCount ) {
        for (let i=0; i < arraySourceLength - actualDeleteCount; i++ ) {
            let from = actualDeleteCount + i + '';
            let to = itemsCount + i + '';
            let fromPresent = arraySourceObj.hasOwnProperty(from);
            if ( fromPresent ) {
                bufferArray[i] = arraySourceObj[actualStart + i];
            }
        }
    }

    // остановка на 20 шаге! http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.splice 
































    // рандомная метка, по которой потом будут удаляться элементы из массива;
    let randomMark = Date.now();
    // массивы для работы
    let outArray = []; //
    let tempArrayWithRandomMarks = [];
    let bufferArray = [];
    // параметры метода splice
    let beginParam = begin;
    if ( !beginParam && beginParam != 0 ) { return outArray; }
    let deleteParam = deleteC;
    if ( !deleteParam && deleteParam != 0 ) { deleteParam=arraySourceLength-beginParam; }
    // аргументы метода splice из которых потом будут выдернуты ItemN, если заданы.
    let itemArguments = arguments;
    let functionLaunch = false;

    /**
     * Функция для обработки массивов и выполнения splice
     * @param startArgument {number} брать только items из arguments
     * @return как такового ретерна нет, меняет массивы через замыкание,
     *         определенные в родительской функции
     */
     let counter2 = 0;
    function spliceInnerFunction( startArgument ) {
        ++counter2
        console.log('beginParam in func start',beginParam);
        let startArgumentShadow = startArgument;
        let counter = 0;
        let maxDeleteLength;

        if ( deleteParam === 0 ) {
            maxDeleteLength = beginParam + deleteParam;
            // console.log('maxDeleteLength1',maxDeleteLength);
        } else if ( beginParam === arraySourceLength ) {
            maxDeleteLength = beginParam +1;
            arraySourceLength += 1;
            // console.log('maxDeleteLength2',maxDeleteLength);
        }
        else if ( beginParam === 0 ) {
           maxDeleteLength = 0;
        //    console.log('maxDeleteLength',maxDeleteLength);
        //    console.log('counter2', counter2);
        }
        else  {
            maxDeleteLength = beginParam - 1 + deleteParam;
            // console.log('maxDeleteLength3',maxDeleteLength);
        }
        // console.log('maxDeleteLength',maxDeleteLength);

        console.log('beginParam in func',beginParam);
        console.log('deleteParam in func',deleteParam);
        console.log('counter2', counter2);

        // забиваем рандомные метки, выделяем массив вырезанных элементов
        for ( let i=0; i < arraySourceLength; i++ ) {
            // console.log('maxDeleteLength', maxDeleteLength);
            if ( i >= beginParam && i <= maxDeleteLength ) {

                tempArrayWithRandomMarks[i] = randomMark;
                 if ( beginParam === 0 ) {
                    continue;
                } else
                if ( deleteParam !== 0 && beginParam !== arraySourceLength-1 ) {
                    // массив вырезанного!
                    outArray[outArray.length] = arraySource[i];
                }
            }
        }
        // условие которое вырезает рандомные метки
        // и при условии наличия элементов ItemN вставляет их в нужном месте
        // используется буферный массив
        for (let i=0; i < arraySourceLength; i++ ) {
            if ( tempArrayWithRandomMarks[i] === randomMark ) {
                if ( startArgumentShadow ) {
                    for (let i1 = startArgument; i1 < itemArguments.length; i1++ ) {
                        bufferArray[bufferArray.length] = itemArguments[i1];
                        // console.log('bufferArray1',bufferArray);
                    }
                    startArgumentShadow = null;
                }
                if ( deleteParam === 0 ) {
                    bufferArray[bufferArray.length] = arraySource[i];
                    // console.log('bufferArray2',bufferArray);
                }
                ++counter;
            }
            else if ( beginParam === 0 ) {
                continue;
            }
            else {
                // console.log('bufferArray3',bufferArray);
                bufferArray[bufferArray.length] = arraySource[i];
                // console.log('bufferArray4',bufferArray);
            }
        }
        // console.log('arraySource1',arraySource);
        // изменение основного массива через значения буферного массива
        if ( beginParam === 0 ) {
            // console.log('TWOO');
            let twoArrLength = arraySourceLength + bufferArray.length;
            let twoArray = [];
            // console.log('arraySourceTWOO_START',arraySource);

            for (let i=0; i < bufferArray.length; i++ ) {
                twoArray[i] = bufferArray[i];
            }

            for (let i=0; i < arraySourceLength; i++ ) {
                twoArray[i + bufferArray.length] = arraySource[i];
            }


            for (let i=0; i < twoArrLength; i++ ) {
                arraySource[i] = twoArray[i];
            }
            // console.log('arraySourceTWOO_EDN',arraySource);
        } else {
            // console.log('OONE');
            for (let i=0; i < bufferArray.length; i++ ) {
                arraySource[i] = bufferArray[i];
            }
        }
        // console.log('arraySource2',arraySource);
        // условие, если не было itemN то отрезается пустой хвост от основного массива
        if ( !startArgument ) {
            arraySource.length = arraySourceLength - counter;
        }
        counter = 0;

    } //spliceInnerFunction

    // создаем временный массив с рандомными метками, как копию arraySource
    for (let i=0; i < arraySourceLength; i++ ) {
        tempArrayWithRandomMarks[tempArrayWithRandomMarks.length] = arraySource[i];
    } // создаем временный массив с рандомными метками, как копию arraySource

    //todo встроить проверку, на то что beginParam deleteParam целые числа

    // begin condition
    // Индекс, по которому начинать изменять массив.
    // Если больше длины массива, реальный индекс будет установлен на длину массива.
    // Если отрицателен, указывает индекс элемента с конца.
    if ( beginParam > arraySourceLength ) {
        beginParam = arraySourceLength;
        if ( !functionLaunch && itemArguments.length > 3 ) {
            let startArgument = 3;
            functionLaunch = true;
            spliceInnerFunction( startArgument );
        }
    } else if ( beginParam < 0 ) {
        if ( Math.abs(beginParam) > arraySourceLength ) {
            beginParam = 0;
            if ( !functionLaunch && itemArguments.length > 3 ) {
                let startArgument = 3;
                functionLaunch = true;
                spliceInnerFunction( startArgument );
            }
            return outArray;
        }

        else if ( Math.abs(beginParam) <= arraySourceLength ) {
            beginParam = arraySourceLength + beginParam;
            console.log('beginParam!', beginParam);
            if ( deleteParam < 0 ) {
                deleteParam = 0;
                console.log('deleteParam', deleteParam);
            }
            if ( !functionLaunch && itemArguments.length > 3 ) {
                // console.log('anuka!');
                let startArgument = 3;
                functionLaunch = true;
                spliceInnerFunction( startArgument );
                return outArray;
            }
            else if ( !functionLaunch && itemArguments.length <= 3 ) {
                console.log('anuka!');
                spliceInnerFunction(  );
                //
                // functionLaunch = true;
                // spliceInnerFunction( startArgument );
                return outArray;
            }
            else {
                return outArray;
                console.log('__====__')
            }
        }
        else {
        console.log('beginParam ABS!', beginParam);
            beginParam = arraySourceLength + beginParam;
            console.log('beginParam ABS!', beginParam);
            console.log('deleteParam ABS!', deleteParam);
        }
    } // begin condition

    // delete condition
    // Целое число, показывающее количество старых удаляемых из массива элементов.
    // Если deleteCount равен 0, элементы не удаляются.
    // В этом случае вы должны указать как минимум один новый элемент.
    //
    // Если deleteCount больше количества элементов, оставшихся в массиве,
    // начиная с индекса start, то будут удалены все элементы до конца массива.
    if ( deleteParam === 0 && itemArguments.length <= 3 ) {
        return outArray;
    }
    // else if ( deleteParam > arraySourceLength - beginParam && itemArguments.length > 3 )  {
    //     let startArgument = 3;
    //     deleteParam =
    //     spliceInnerFunction( startArgument );
    // }
    // delete condition

    // проверка на то есть ли новые добавляемые элементы или нет
    // если аргументы для удаления заданы но не все или вообще не заданы
    // если заданы только аргументы для удаления.
    if ( itemArguments.length <= 3 ) {
        console.log('anuka2!');
        spliceInnerFunction();
    } else
    // если заданы items для добавления
    if ( !functionLaunch && itemArguments.length > 3 ) {
        let startArgument = 3;
        functionLaunch = true;
        spliceInnerFunction( startArgument );
    }
    // проверка на то есть ли новые добавляемые элементы или нет

    return outArray;
}; //splice

try {
    console.log('INPUT array', testSpliceArrayMy);
    let splice1 = splice(testSpliceArrayMy
        // разные условия
        // вырезать 1 элемент со второго
        // ,2, 1
        // вырезать 1 и вставить 2 элемента со 2-го
        // ,2, 1, '123', '123'
        // всего один аргумент с какой позиции резать
        // ,2
        // условие когда Delete === 0 и есть itemN для вставки
        // ,2, 0, '123', '321'
        // когда все значения отрицательные c itemN
        // ,-22, -22, '123', '321'
        // ,-2, -2, '123', '321'
        // ,22, 2, '123', '321'
        // когда все значения отрицательные без itemN
        // ,-22, -22
        ,-3, -2
        // ,-2
        // ,-1
        // ,-99





        // ОТДЕЛЬНО! проверить что будет если аргументы не заданы

    );
    let spliceEtalon = testSpliceArrayEtalon.splice(
        // разные условия
        // вырезать 1 элемент со второго
        // 2, 1
        // вырезать 1 и вставить 2 элемента со 2-го
        // 2, 1, '123', '123'
        // всего один аргумент с какой позиции резать
        // 2
        // условие когда Delete === 0 и есть itemN для вставки
        // 2, 0, '123', '321'
        // когда все значения отрицательные c itemN
        // -22, -22, '123', '321'
        -2, -2, '123', '321'
        // 22, 2, '123', '321'
        // когда все значения отрицательные без itemN
        // -22, -22
        // -3, -2
        // -2
        // -1
        // -99





        // ОТДЕЛЬНО! проверить что будет если аргументы не заданы

    );
    console.log('My     AFTER SPLICE', testSpliceArrayMy);
    console.log('Etalon AFTER SPLICE', testSpliceArrayEtalon);
    console.log('My     cut array', splice1);
    console.log('Etalon cut array', spliceEtalon);
    console.log('-------');
} catch (e) {
    if ( e.message === 'NOT_ARRAY' ) {
        console.error('Введен пустой массив или массив не задан!');
    } else {
        console.error('Ошибка!');
        console.dir(e);
    }
}
// try {
//     let reduce1 = reduce(array, (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 );
//     let reduceEtalon = array.reduce( (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 )
//     console.log('reduce array', reduce1);
//     console.log('reduce etalon', reduceEtalon);
//     console.log('-------');
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     } else {
//         console.error('Ошибка!');
//         console.dir(e);
//     }
// }
// try {
//     let reduce1 = reduce(array2, (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 );
//     let reduceEtalon = array2.reduce( (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 )
//     console.log('reduce array2', reduce1);
//     console.log('reduce etalon2', reduceEtalon);
//     console.log('-------');
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     } else {
//         console.error('Ошибка!');
//         console.dir(e);
//     }
// }
// try {
//     let reduce1 = reduce(array3, (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 );
//     let reduceEtalon = array3.reduce( (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 )
//     console.log('reduce array3', reduce1);
//     console.log('reduce etalon3', reduceEtalon);
//     console.log('-------');
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     } else {
//         console.error('Ошибка!');
//         console.dir(e);
//     }
// }
// try {
//     let reduce1 = reduce(array4, (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 );
//     let reduceEtalon = array4.reduce( (previousValue, currentValue, index, array) => { return previousValue + currentValue }, 10 )
//     console.log('reduce array4', reduce1);
//     console.log('reduce etalon4', reduceEtalon);
//     console.log('-------');
// } catch (e) {
//     if ( e.message === 'NOT_ARRAY' ) {
//         console.error('Введен пустой массив или массив не задан!');
//     } else {
//         console.error('Ошибка!');
//         console.dir(e);
//     }
// }
// splice end
