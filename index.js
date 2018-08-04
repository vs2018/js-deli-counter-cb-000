function takeANumber(peopleArray, name){
  var number
  for (var i = 0; i < peopleArray.length; i++) {
    if (name === peopleArray[i]) {
      number = i + 1
    }
  }
  return `Welcome, Ada. You are number ${peopleArray[]} in line.`
}
