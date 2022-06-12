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

const titleCased = tutorials.map(title => {
  

  return tutorials.map(uppercase)
})


// const titleCased= tutorials.map(uppercase)

function uppercase(title){

  return title= title[0].toUpperCase() + title.substring(1).toLowerCase()

}
console.log(titleCased)
