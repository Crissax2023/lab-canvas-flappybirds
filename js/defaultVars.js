const canvas =  document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let frames =0
const gravity = 0.1

//array

let pipes =[]

let points =0
let diff=1 //dificultad
let requestId

//audio

const audio = new Audio()
audio.src ="./audio/AMBIENTIC_-_Janus.mp3"
audio.loop = true

let vida = {

    vida :3,
    status: "pequeño",
    moneda:0

}