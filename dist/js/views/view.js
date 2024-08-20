export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let templete = this.templete(model);
        if (this.escapar) {
            templete = templete.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = templete;
    }
}
