function takeANumber(peopleArray, name){
  peopleArray.push(name)
  return `Welcome, ${name}. You are number ${peopleArray.length + 1} in line.`
}
