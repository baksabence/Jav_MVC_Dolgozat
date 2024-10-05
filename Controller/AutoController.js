import AutoModell from "../Modell/AutoModell.js";
import Autok from "../View/Autok.js";
import { autoLISTA } from "../Modell/adat.js";

export default class AutoController{

    constructor(){
        this.taroloElem = $(".autok")
        console.log(this.taroloElem)
        //new Autok(autoLISTA, this.taroloElem)
        this.autoModell = new AutoModell(autoLISTA)
        this.autokView = new Autok(this.taroloElem)
        this.autokView.megjelenit(this.autoModell.getLista())
        this.#esemenyKezelo()
    }

    #esemenyKezelo(){
        $(window).on("torles", (event) => {
            console.log(event.detail)   
            const id = event.detail         
            this.autoModell.torol(id)
            this.autokView.frissit(this.autoModell.getLista())
          });

          
    }
}