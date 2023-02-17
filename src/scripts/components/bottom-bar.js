class BottomBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <p>Copyright &copy; 2023 - Grily App </p>
        `;
    }
}

customElements.define('bottom-bar', BottomBar);