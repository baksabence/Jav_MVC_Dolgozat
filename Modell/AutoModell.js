
export default class AutoModell {
    #lista = []

    constructor(lista) {
        this.#lista = lista
    }

    torol(index) {
        this.#lista.splice(index, 1);

    }

    getLista() {
        return this.#lista;
    }
}