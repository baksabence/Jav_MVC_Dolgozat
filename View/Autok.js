import Auto from "./Auto.js";

export default class Autok{
    #lista = []
    #szuloElem

    constructor(lista, szuloElem){
        this.#lista = lista
        this.#szuloElem = szuloElem
        this.#szuloElem.empty()
        this.megjelenit()

        window.addEventListener("torles", (event) => {
            this.torol(event.detail)
        })
    }

    megjelenit(){
        this.#lista.forEach((elem, index) =>{
            console.log(elem)
            new Auto(elem, index, this.#szuloElem)
        })
    }

    torol(id){
        this.#lista.splice(id, 1)
        this.#szuloElem.empty()
        this.megjelenit()
    }

}