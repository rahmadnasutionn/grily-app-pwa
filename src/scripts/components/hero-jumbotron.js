class HeroTitle extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="hero">
            <picture>
                <source media="(max-width: 600px)" srcset="./images/hero-image-small.jpg" />
                <source media="(min-width: 601px)" srcset="./images/hero-image-large.jpg" />
                <img class="lazyload" data-src="./images/hero-image-large.jpg" alt="Grily Banner">
            </picture>
          <div class="hero__container">
            <h2 tabindex="0">
                We Serve The Test You Love
            </h2>
            <p tabindex="0">Our restaurant will make you can't move on</p>
            <a href="#mainContent" class="hero__btn">Explore</a>
          </div>
         </div>
        `;
    }
}

customElements.define('hero-jumbotron', HeroTitle);