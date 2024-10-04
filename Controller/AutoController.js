import Autok from "../View/Autok.js";
import { autoLISTA } from "../Modell/adat.js";

export default class AutoController{

    constructor(){
        this.taroloElem = $(".autok")
        console.log(this.taroloElem)
        new Autok(autoLISTA, this.taroloElem)
    }
}