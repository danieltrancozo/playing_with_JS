let res;
let mapadress = "https://danieltrancozo.github.io/playing_with_JS/json-files/map.json";
let map;
let componentFunction;
let componentModel;

function requests(adress){
    let request = new XMLHttpRequest();
    request.open('GET', adress, true);
    request.onload = function(){
        res = JSON.parse(request.responseText);
        console.log(res);
    }
    request.send();
}

function loadmap(){
    requests(mapadress);
    map = res;
}

function loadComponentModel(){
    requests(map.components.model);
    componentModel = res;
}

function laodComponentFunction(){
    let f;
    requests(map.components.function);
    f = res.function;
    componentFunction = new Function(f.arguments, f.body);
}

function main(){
    loadmap();
    loadComponentModel();
    laodComponentFunction();
    start();
}

function start(){
    componentModel.tag = "h1";
    componentModel.class = null;
    componentModel.id = "hello_world"
    componentModel.style = "color: red; backgroundColor: yellow;"
}