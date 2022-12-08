
export default class Button {
    constructor (nombre, css){
        this.element = document.createElement("div")
        this.alt = document.createElement("button")
        this.alt.name = "alt";
        this.alt.textContent = "hide"
        this.element.appendChild(this.alt)
        this.element.className = "def"
        this.clase = nombre
        if (css !== undefined && document.getElementById("lista").innerHTML.includes(nombre) == false) {
            let clase = `.${nombre} {`
            for (const prop in css) {
               clase += prop + ":" + css[prop]
            }
            clase += "}"
            document.getElementById("lista").innerHTML += clase
        }
     this.element.classList.toggle(nombre)

        this.alt.addEventListener('click', ()=> {

        this.alter()

        if (this.alt.innerHTML == "hide"){
            this.alt.innerHTML = "show"
        } else {this.alt.innerHTML = "hide"}
        })

        this.element.addEventListener('click', (e)=>{
            if (e.target.tagName == "DIV"){
                alert("Se ha tocado el boton")
            }
         })
        }


addToBody(id){
   document.getElementById(id).append(this.element)

}

alter(){
    this.element.classList.toggle('transparente')
    this.element.classList.toggle(this.clase)
    this.element.classList.toggle('def')
}


}