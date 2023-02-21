// let val = 10

// if (val > 5) {
//     val += 20
// } else {
//     val -= 20
// }

// console.log(val)

//! -------------------------------------

// const person = {
//     age: 20,
//     name:'Artem'

// }

// if (!person.name) {
//     console.log('Имя не указано')
// } else {
//     console.log(person.name)
// }

//! -------------------------------------

// const age = 25

// if (age > 18) {
//     console.log('Is adult')
// } else if (age >= 12) {
//     console.log('Is teenager')
// } else {
//     console.log('Is child')
// }

//! -------------------------------------

// const age = 25

// if (age > 18) {
//     console.log('Is adult')
// }

// if (age >= 12 && age <= 18) {
//     console.log('Is teenager')
// } 
// if (age < 12) {
//     console.log('Is child')
// }

//! -------------------------------------

// const a = 5
// const b = 7
// const sumPositiveNumber = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of the arguments is not a number'
//     }
    
//     if (a <= 0 || b <= 0) {
//         return 'Numbers are not positive'
//     }

//     return console.log(a + b)
// }

//! -------------------------------------

// const mouth = 4

// switch(mouth) {
//     case 12:
//         console.log('Декабрь')
//         break
//     case 1:
//         console.log('Январь')
//         break
//     case 2:
//         console.log('Февраль')
//         break
//     default:
//         console.log('Это не зимний месяц')
// }

//! -------------------------------------

// const value = 11

// value
//     ? console.log('Условие истинно')
//     : console.log('Условие ложно')

//! -------------------------------------

// const value1 = 11
// const value2 = 25

// value1 && value2
//     ? myFunction1(value1, value2)
//     : myFunction2()

//! -------------------------------------

// let value = 11 
// console.log(value >= 0 ? value : -value)

// value = -5
// const res = value >= 0 ? value : -value
// console.log(res)

//! -------------------------------------

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
//! -------------------------------------
// const myArray = ['first','second','third']
// for (let i = 0; i < myArray.length; i++) { //! Этот метод для заёба
//     console.log(myArray[i])
// }
//! -------------------------------------
// const myArray = ['first','second','third']

// myArray.forEach((element, index) => {
//     console.log(element, index)
// })
//! -------------------------------------
// let i = 0
// while (i <= 5) {
//     console.log(i)
//     i++
// }
//! -------------------------------------

// let i = 0 
// do {
//     console.log(i)
//     i++
// }    while (i < 5)
//! -------------------------------------

// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }

// for (const key in myObject) {
//     console.log(key, myObject[key])
// }
//! -------------------------------------

// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'    
// }
// Object.keys(myObject).forEach(key => {
//     console.log(key, myObject[key])
// })
//! -------------------------------------

// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'    
// }

// Object.values(myObject).forEach(value => {
//     console.log(value)
// })
//! -------------------------------------

// const myArray = [true, 10, 'abc', null]

// for (const key in myArray) {
//     console.log(myArray[key]) //! Удобная хуйня для питониста!
// }
//! -------------------------------------

