export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    abstract templete(model: T): string;

    update(model: T): void {
        const templete = this.templete(model);
        this.elemento.innerHTML = templete;
    }
}