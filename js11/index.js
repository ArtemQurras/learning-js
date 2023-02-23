// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }
//     upvote() {
//         this.votesQty += 1
//     }
// }

// const firstComment = new Comment('First comment')

// console.log(firstComment.hasOwnProperty('text'))
// console.log(firstComment.hasOwnProperty('votesQty'))
// console.log(firstComment.hasOwnProperty('upvota'))
// console.log(firstComment.hasOwnProperty('hasOwnProperty'))
//! --------------------------------------------

// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }

//     upvote() {
//         this.votesQty += 1
//     }

//     static mergeComments(first, second) {
//         return `${first} ${second}`
//     }
// }

// console.log(Comment.mergeComments('First Comment.','Second Comment.'))
//! --------------------------------------------

// class NumbersArray extends Array {
//     sum() {
//         return this.reduce((el, acc) => acc += el, 0)
//     }
// }

// const myArray = new NumbersArray(2, 5, 7)

// console.log(myArray)
// console.log(myArray.sum())
//! --------------------------------------------

// const asyncFn = async () => {
//     return 'Success!'
// }

// console.log(asyncFn())
//! --------------------------------------------

// const timerPromise = () =>
//     new Promise((resolve, reject) => 
//         setTimeout(() => resolve(), 2000))

// const asyncFn = async () => {
//     console.log('Timer starts')
//     await timerPromise()
//     console.log('Timed ended')
// }

// console.log(asyncFn())
//! --------------------------------------------

const timerPromise = () =>
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)

}

console.log(asyncFn())