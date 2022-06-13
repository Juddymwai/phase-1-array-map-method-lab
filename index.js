const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
  

//   return tutorials.map(uppercase)
// }


// // const titleCased= tutorials.map(uppercase)

// function uppercase(titles){
//   titles.split('').map(

//   title =>title[0].toUpperCase() + title.slice(1)).join(" ")

// }
// console.log(titleCased())

const titleCased= ()=>{
  return tutorials.map(titles=> titles.split(' ').map(

    title=> title[0].toUpperCase() + title.slice(1)).join(" "))
}
console.log(titleCased())
