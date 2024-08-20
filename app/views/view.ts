export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract templete(model: T): string;

    public update(model: T): void {
        const templete = this.templete(model);
        this.elemento.innerHTML = templete;
    }
}