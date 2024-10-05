import Auto from "./Auto.js"

export default class Autok {
    #szuloElem

    constructor(szuloElem) {
        this.#szuloElem = szuloElem
    }

    megjelenit(lista) {
        this.#szuloElem.empty();
        lista.forEach((elem, index) => {
            new Auto(elem, index, this.#szuloElem)
        })
    }

    frissit(lista) {
        this.megjelenit(lista)
    }

    
}