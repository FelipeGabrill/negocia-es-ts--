export class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    templete(model: T): string {
        throw Error('Classe filha precisa implementar o método templete');
    }

    update(model: T): void {
        const templete = this.templete(model);
        this.elemento.innerHTML = templete;
    }
}