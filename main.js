import { showCategories } from "./scripts/consultaCategorias.js";
import { valor } from "./scripts/consultaPreguntas.js";
import { imprimir } from "./scripts/preguntas.js";

const modal1 = document.querySelector("#modal1")
const modal2 = document.querySelector("#modal2")
export const questions = []

showCategories()

document.querySelector("#start").addEventListener("click", (e) => {
    e.preventDefault()
    valor()

    const nodata = valor.categoria
    if (nodata == 0) {


        modal2.showModal()
        setTimeout(() => {
            window.location.reload()
        }, 2400);

    } else {

        let categoria = valor.categoria
        let dificultad = valor.dificultad
        let tipoPregunta = valor.tipoPregunta


        async function opciones() {
            try {
                const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoria}&difficulty=${dificultad}&type=${tipoPregunta}`)
                const data = await response.json()
                questions.push(...data.results)
                


                const nodata = data.response_code

                if (nodata >= 1) {
                    modal1.showModal()
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000);
                }else {
                    const hideOptions = document.querySelector("#options")

                    hideOptions.classList.remove("mostrar")
                    hideOptions.classList.add("ocultar")

                    const showQuestions = document.querySelector("#question")

                    showQuestions.classList.remove("ocultar")
                    showQuestions.classList.add("mostrar")

                    imprimir()
                }

            } catch (error) {
                console.log(error);
            }
        }
        opciones()
    }
})