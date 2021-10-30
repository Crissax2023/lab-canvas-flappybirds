const canvas =  document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let frames =0
const gravity = 0.2

//array

let pipes =[]

let points =0
let diff=1
let requestId

//audio

const audio = new Audio()
//audio.src =""

