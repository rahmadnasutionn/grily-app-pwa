const NotificationHelper = {
    sendNotification({ title, options }) {
        if (!this._checkAvailibility()) {
            console.log('Notification not supported in the browser');
            return;
        }

        if (!this._checkPermission()) {
            console.log('User did not yet granted permission');
            this._requestPermission();
            return;
        }

        this._showNotification({ title, options });
    },

    _checkAvailibility() {
        return 'Notification' in window;
    },

    _checkPermission() {
        return Notification.permission === 'granted';
    },

    async _requestPermission() {
        const status = await Notification.requestPermission();

        if (status === 'denied') {
            console.log('Notification denied');
        }

        if (status === 'default') {
            console.log('Notification default');
        }
    },

    async _showNotification({ title, options }) {
        const serviceWorkerRegistration = await navigator.serviceWorker.ready;
        serviceWorkerRegistration.showNotification(title, options);
    }
};

export default NotificationHelper;