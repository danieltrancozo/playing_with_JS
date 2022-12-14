let map = JSON.parse("playing_with_JS/json-files/map.json");
let componentFunction = JSON.parse(map.components.function);
let componentModel = JSON.parse(map.components.model);
let componentConstructor = new componentModel;
let componentRender = new Function(componentFunction.function.arguments, componentFunction.function.body);

onload(onloadFunctions());

function onloadFunctions(){
    componentConstructor.tag = "h1";
    componentConstructor.class = null;
    componentConstructor.id = "hello_world";
    componentConstructor.style = "color: red; backgroundColor: yellow;";
    componentRender("root",componentConstructor);
}
