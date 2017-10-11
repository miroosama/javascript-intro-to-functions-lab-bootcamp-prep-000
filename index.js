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
   console.log("hello")
return(`I can't hear you!`)
}

function sayHiToGrandma(logShout()){
  console.log("HELLO")
  return(`YES INDEED!`)
}

function sayHiToGrandma(mixedCase){
  console.log("I love you, Grandma.")
  return(`I love you, too.`)
}
