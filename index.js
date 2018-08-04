function takeANumber(peopleArray, name){
  peopleArray.push(name)
  return `Welcome, ${name}. You are number ${peopleArray.length} in line.`
}

function nowServing(line) {
   if (line.length === 0) {
     return "There is nobody waiting to be served!"
   }
  var person = line.shift()


  return `Currently serving ${person}.`
}

function currentLine(line) {
  if (line.length === 0 ){
    return "The line is currently empty."
  }
}
