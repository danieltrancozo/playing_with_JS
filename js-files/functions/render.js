function render(place,components){
    let place = document.getElementById(place);
    let component = document.createElement(components.tag);
    this.component.class = components.class;
    this.component.id = components.id;
    this.component.style = components.style;
    place.appendChild(this.component)
}