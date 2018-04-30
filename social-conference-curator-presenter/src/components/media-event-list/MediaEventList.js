// @flow
import React, { Component } from 'react';
import MediaEvent from '../media-event/MediaEvent'
import moment from 'moment';
import './MediaEventList.css';
import SocialMediaWebSocket from '../websocket/SocialMediaWebSocket'

type State = {
	eventList?: Array<Object>
}

class MediaEventList extends Component<{}, State> {
	socket = new SocialMediaWebSocket();

	state = {
		
	}

	componentDidMount() {
		this.socket.addMessageHandler((eventListUpdate) => this.setState({
			eventList: eventListUpdate
		}));
	} 
	
	_renderEventList() {
		if (this.state.eventList) {
			return this.state.eventList.map((event, index, eventList) => {
				return (
				<MediaEvent 
					key={event.id}
					createdDate={event.createdDate}
					text={event.text}
					userImage={event.userImage}
					screenName={event.screenName}
				/>
				);
			});
		}
	}
	
	render() {
		return (
			<div className="event-list">
				<div className="update-time">
					{this.state.eventList ? "Last push from server: " + moment().format('LT') : null}
				</div>
			{this.state.eventList ? this._renderEventList() : "Waiting for push from server..."}
			</div>
		);
	}
}

export default MediaEventList;