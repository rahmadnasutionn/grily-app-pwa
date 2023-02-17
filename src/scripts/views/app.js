import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
    constructor({
        button,
        drawer,
        appBar,
        navbar,
        content,
    }) {
        this._button = button;
        this._drawer = drawer;
        this._appBar = appBar;
        this._navbar = navbar;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            appBar: this._appBar,
            navbar: this._navbar,
            content: this._content,
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();

        const skipLink = document.querySelector('skip-link');
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#mainContent').focus();
            document.querySelector('#mainContent').scrollIntoView({
                behavior: 'smooth'
            });
        });
        console.log(skipLink);
    }
}

export default App;