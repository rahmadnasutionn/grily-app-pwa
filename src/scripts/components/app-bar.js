class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
    <div id="navbar" class="navbar">
        <div class="nav__center">
            <div class="nav__header">
                <h1><a href="/">Grily</a></h1>
                <button type="button" id="hamburgerButton" class="nav__toggle">☰</button>
            </div>
            <nav class="nav__links" id="navigationDrawer">
                <ul class="links">
                    <li><a href="#/list" class="nav__item">Home</a></li>
                    <li><a href="#/favorite" class="nav__item">Favorites</a></li>
                    <li><a href="https://id.linkedin.com/in/rahmad-nasution-709b45245" target="_blank" class="nav__item">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
        `;
    }
}

customElements.define('app-bar', AppBar);