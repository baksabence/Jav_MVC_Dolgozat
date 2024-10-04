
export default class Auto{

    #kepAdat = {}
    #id
    #szuloElem
    gombelem

    constructor(kepAdat, id, szuloElem){
        this.#kepAdat = kepAdat
        this.#id = id;
        this.#szuloElem = szuloElem;

        this.megjelenit()
        
    }

    megjelenit(){
        let txt = `
        <div class="col-lg-4 col-md-6">
                <div class="card mb-3">
                <img src="${this.#kepAdat.kep}" class="card-img-top" alt="${this.#kepAdat.fajta}">
                    <div class="card-body autoElem">
                        <button class="btn delete-btn-${this.#id}">Törlés</button>
                        <p>Fajta: ${this.#kepAdat.fajta}</p> 
                        <p>Évjárat: ${this.#kepAdat.evjarat}</p> 
                        <p>Szín: ${this.#kepAdat.szin}</p>
                    
                    </div>
                </div>
            </div>`
        this.#szuloElem.append(txt)

        this.gombElem = this.#szuloElem.find(`.delete-btn-${this.#id}`)
        this.gombkattint()

    }

    gombkattint(){
        this.gombElem.on("click", () =>{
            const e = new CustomEvent("torles", {detail:this.#id})
            window.dispatchEvent(e)
        })
    }

}
