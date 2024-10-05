export default class Auto {
    #kepAdat = {};
    #id;
    #szuloElem;

    constructor(kepAdat, id, szuloElem) {
        this.#kepAdat = kepAdat;
        this.#id = id;
        this.#szuloElem = szuloElem;
        this.megjelenit();
    }

    megjelenit() {
        let txt = `
        <div class="col-lg-4 col-md-6">
            <div class="card mb-3 autoElem">
                <img src="${this.#kepAdat.kep}" class="card-img-top" alt="${this.#kepAdat.fajta}">
                <div class="card-body">
                    <button class="btn delete-btn" data-id="${this.#id}">Törlés</button>
                    <p>Fajta: ${this.#kepAdat.fajta}</p> 
                    <p>Évjárat: ${this.#kepAdat.evjarat}</p> 
                    <p>Szín: ${this.#kepAdat.szin}</p>
                </div>
            </div>
        </div>`;
        
        this.#szuloElem.append(txt);
        
        this.gombkattint()
    }

    gombkattint() {
        this.#szuloElem.off("click", ".delete-btn")
        this.#szuloElem.on("click", ".delete-btn", (event) => {
            const id = $(event.currentTarget).data("id")
            const e = new CustomEvent("torles", { detail: id })
            window.dispatchEvent(e)
        });
    }
}