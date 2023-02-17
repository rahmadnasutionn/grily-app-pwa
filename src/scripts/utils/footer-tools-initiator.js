import CONFIG from '../globals/config';

const FooterToolsInitiator = {
    async init({ subscribeButton, unsubscribeButton }) {
        this._subscribeButton = subscribeButton;
        this._unsubscribeButton = unsubscribeButton;
        this._registrationServiceWorker = null;

        if ('serviceWorker' in navigator) {
            this._registrationServiceWorker = await navigator.serviceWorker.getRegistration();
        }

        await this._initialListener();
        await this._initialState();
    },

    async _initialListener() {
        this._subscribeButton.addEventListener('click', (event) => {
            this._subscribePushMessage(event);
        });

        this._unsubscribeButton.addEventListener('click', (event) => {
            this._unsubscribePushMessage(event);
        });
    },

    // eslint-disable-next-line no-empty-function
    async _initialState() {},

    async _subscribePushMessage(event) {
        event.stopPropagation();
        console.log('Subscribe push message');
    },

    async _unsubscribePushMessage(event) {
        event.stopPropagation();
        console.log('Unsubscribe push message');
    },

    _urlB64ToUint8Array: (base64String) => {
        // eslint-disable-next-line no-mixed-operators
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < outputArray.length; i++) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    },

    async _sendPostToServer(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        return response.json();
    },

    _isSubscribedToServerForHiddenSubscribeButton(state = false) {
        if (state) {
            this._subscribeButton.style.display = 'none';
            this._unsubscribeButton.style.display = 'inline-block';
        } else {
            this._subscribeButton.style.display = 'inline-block';
            this._unsubscribeButton.style.display = 'none';
        }
    },

    _generateSubsribeOptions() {
        return {
            userVisibleOnly: true,
            applicationServerKey: this._urlB64ToUint8Array(CONFIG.PUSH_MSG_VAPID_PUBLIC_KEY)
        };
    }

};

export default FooterToolsInitiator;