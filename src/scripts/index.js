import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.css';
import './components/app-bar';
import './components/bottom-bar';
import './components/hero-jumbotron';
import './components/skip-link';
import CONFIG from './globals/config';
import FooterToolsInitiator from './utils/footer-tools-initiator';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/web-socket-initiator';
import App from './views/app';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    appBar: document.querySelector('#appBar'),
    navbar: document.querySelector('#navbar'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', async() => {
    app.renderPage();
    await swRegister();
    WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);

    FooterToolsInitiator.init({
        subscribeButton: document.querySelector('#subscribePushNotification'),
        unsubscribeButton: document.querySelector('#unsubscribePushNotification')
    });
});