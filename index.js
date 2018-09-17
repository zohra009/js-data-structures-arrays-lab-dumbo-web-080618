
// is assigned an initial value of ["Milo", "Otis", "Garfield"] ‣
// is declared with const
const drivers = ["Milo", "Otis", "Garfield"]

//appends a driver to the end of the drivers array
function destructivelyAppendDriver(name) {
  return drivers.push(name)
}

//prepends a driver to the beginning of the drivers array
function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}
//removes the last driver from the drivers array
function destructivelyRemoveLastDriver() {
  return drivers.pop()
}

//removes the First driver from the drivers array
function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

//appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function appendDriver(name) {
  return [...drivers, name]
}

//appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function prependDriver(name) {
  return [name, ...drivers]
}

//removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
function removeLastDriver() {
  return drivers.slice(0,2) //
}

//

//removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
function removeFirstDriver() {
  return drivers.slice(1, drivers.length) //inclusive is the 1 and includes the the index of 1 name and drivers.last is exclusive and exclude the last thing.

}
