const DrawerInitiator = {
    init({ button, drawer, appBar, navbar, content }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer);
        });

        appBar.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });

        window.addEventListener('scroll', (event) => {
            this._scrollHeight(event, navbar);
        });
    },

    _scrollHeight(event, navbar) {
        event.stopPropagation();

        const scrollHeght = window.pageYOffset;
        const navbarHeight = navbar.getBoundingClientRect().left;

        if (scrollHeght > navbarHeight) {
            navbar.classList.add('fixed-nav');
            navbar.classList.remove('navbar');
        } else {
            navbar.classList.remove('fixed-nav');
            navbar.classList.add('navbar');
        }
    },

    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('open');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
    },
};

export default DrawerInitiator;