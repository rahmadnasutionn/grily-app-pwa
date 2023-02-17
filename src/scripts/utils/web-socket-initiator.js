import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
    init(url) {
        const webSocket = new WebSocket(url);
        webSocket.onmessage = this._oneMessageHandler;
    },

    _oneMessageHandler(message) {
        const data = JSON.parse(message.data);

        NotificationHelper.sendNotification({
            title: data.name,
            options: {
                body: data.name,
                icon: '/icons/favicon-192x192.png',
                image: 'https://i.ibb.co/nBh3jrM/roompy-android-web.png'
            }
        });
    }
};

export default WebSocketInitiator;