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

function main(){
    requests(mapadress);
    map = res;
    requests(map[0].components.model);
    componentModel = res[0];
    requests(map[0].components.function);
    componentFunction = new Function(res[0].function.arguments, res[0].function.body)
    start();
}

function start(){
    componentModel.tag = "h1";
    componentModel.class = null;
    componentModel.id = "hello_world"
    componentModel.style = "color: red; backgroundColor: yellow;"
}

onload(main());