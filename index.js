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

const titleCased = () => {
  let newArray = tutorials.map(function(item){
    let x = item.split(" ");
    var a = x.map(function(uppercase){
      var y = uppercase.charAt(0).toUpperCase() + uppercase.slice(1);
      return(y);
      
    })
    let newString = "";
    let z = a.map(function(abc){
      newString =  newString + (abc) + " ";
      //console.log(abc)
    })
    let newerString = newString.slice(0,-1);
    console.log(newerString);
    return newerString;
  })
  console.log(newArray)
  return newArray;
}
