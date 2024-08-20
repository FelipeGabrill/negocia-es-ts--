export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const templete = this.templete(model);
        this.elemento.innerHTML = templete;
    }
}
