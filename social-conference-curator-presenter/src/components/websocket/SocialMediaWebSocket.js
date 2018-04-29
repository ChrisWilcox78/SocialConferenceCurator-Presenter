
class SocialMediaWebSocket {
	constructor() {
		this.socket = new WebSocket("ws://localhost:9996/social-media-socket/register");
	}

	addMessageHandler(handler) {
		this.socket.onmessage = event => {
			var usefulData = this._extractUsefulData(JSON.parse(event.data));
			handler(usefulData);
		};
	}

	_extractUsefulData(parsedJson) {
		return parsedJson.map(status => {
			return status.post;
		});
	}
}

export default SocialMediaWebSocket;