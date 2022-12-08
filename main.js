 import Button from './Button.mjs'


 let css = {
    "background-color": "blue;",
    "color": "white;",
    "height": "5em;",
    "width": "15em;"
}

let head = document.getElementsByTagName('head')[0]
let style = document.createElement('link')
style.href = 'button.css'
style.type = 'text/css'
style.rel = 'stylesheet'
head.append(style)

let listaClases = document.createElement('style')
listaClases.id = "lista"
head.append(listaClases) 

let def = document.getElementById('default')
 
let a = document.getElementById('1')
let b = document.getElementById('2')
a.addEventListener('click', (e)=>{
    let Boton = new Button("opcion1", css)
    Boton.addToBody("segundo") 
})

 def.addEventListener('click', (e)=>{
let Boton = new Button()
Boton.addToBody("primer")
 })
 b.addEventListener('click', (e)=>{
    let Boton = new Button("opcion2", {    "background-color": "green;",
    "color": "yellow;",
    "height": "7em;",
    "width": "10em;"})
    Boton.addToBody("tercero") 
})
