import * as WorkboxWindow from 'workbox-window';

const swRegister = async() => {
    if (!('serviceWorker' in navigator)) {
        console.log('Service worker not supported in your browser');
        return;
    }

    const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

    wb.addEventListener('activated', (event) => {
        if (!event.isUpdate) {
            console.log('Service worker activated');
        }
    });

    try {
        await wb.register();
        console.log('Service worker registered');
    } catch (error) {
        console.log('Failed to register service worker', error);
    }
};

export default swRegister;