class SkipLink extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        a {
            text-decoration: none;
        }
        
        .skip__link {
            position: absolute;
            top: -50px;
            left: 0;
            padding: 8px;
            background-color: var(--primaryColor);
            color: white;
            z-index: 100;
            font-size: 14px;
            letter-spacing: 1.5;
        }
        
        .skip__link:focus {
            top: 0;
            border: 1px solid #222;
        }
        </style>
        <a href="#" class="skip__link">Menuju Ke Kontent</a>
        `;
    }
}

customElements.define('skip-link', SkipLink);