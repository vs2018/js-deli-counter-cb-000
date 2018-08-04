function takeANumber(peopleArray, name){
  peopleArray.push(name)
  return `Welcome, ${name}. You are number ${peopleArray.length} in line.`
}

function nowServing(line) {
  return "There is nobody waiting to be served!" if line.length === 0
  var person = line.unshift()


  return person
}
