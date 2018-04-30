
class SocialMediaEventSource {
	constructor() {
		this.socket = new EventSource("//localhost:9998/administration/register", {withCredentials: true});
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

export default SocialMediaEventSource;