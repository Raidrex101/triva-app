const select = document.querySelector("#selectCategories")
const multiple = document.querySelector("#mchoice")
const vOF = document.querySelector("#tof")
const easy = document.querySelector("#easy")
const medium = document.querySelector("#medium")
const hard = document.querySelector("#hard")

let tipoPregunta = multiple
let dificultad = easy


multiple.addEventListener("click", (e) => {
    e.preventDefault()
    tipoPregunta = "multiple"
})
vOF.addEventListener("click", (e) => {
    e.preventDefault()
    tipoPregunta = "boolean"
})

easy.addEventListener("click", (e) => {
    e.preventDefault()
    dificultad = "easy"
})
medium.addEventListener("click", (e) => {
    e.preventDefault()
    dificultad = "medium"
})
hard.addEventListener("click", (e) => {
    e.preventDefault()
    dificultad = "hard"
})

export function valor(){
    let categoria = select.value;
    return valor = { 
        tipoPregunta: tipoPregunta,
        dificultad: dificultad,
        categoria: categoria,
    }
}