
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
		return parsedJson.statuses.map(status => {
			return {
				id: status.id,
				text: status.text,
				created: status.created_at,
				userName: status.user.screen_name,
				userImage: status.user.profile_image_url_https
			}
		});
	}
}

export default SocialMediaEventSource;