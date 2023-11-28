export default class LoadMore {
    constructor({selector, ishidden = false}) {
        this.button = this.getBtn(selector);

        ishidden && this.hideBtn();
    }

    getBtn(selector) {
        return document.querySelector(selector);
    };

    enable() {
        this.button.disabled = false;
        this.button.textContent = 'Load more';
    }

    disable() {
        this.button.disabled = true;
        this.button.textContent = 'Loading...';
    }

    hideBtn() {
        this.button.classList.add('hidden');
    };

    showBtn() {
        this.button.classList.remove('hidden');
    };
}

