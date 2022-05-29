import {text} from "./page1.js";

const obj = {a: "item1", b : "item2", c: "item3"}

const {a,b} = obj
console.log(a, b)

export function renderText() {
    document.getElementById("text").innerText = text
}

