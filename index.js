function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log("HELLO")
}

function logWhisper(string) {
  console.log("hello")
}

function sayHiToGrandma(logWhisper()) { 
  return("I can't hear you!")
}

function sayHiToGrandma(logShout()){
  return("YES INDEED!")
}

function sayHiToGrandma(){
  console.log("I love you, Grandma.")
  return(`I love you, too.`)
}
