import {render} from "./functions/render.mjs"
let map = JSON.parse("./json-files/map.json");
let Render = render;
let components = JSON.parse(map.component);
let component = new components()

onload(onloadFunctions);

function onloadFunctions(){
    this.component.tag = "h1";
    this.component.class = null;
    this.component.id = "hello World!";
    this.component.style = "color: red; background: yellow;";
    this.Render("root",this.component)
}
