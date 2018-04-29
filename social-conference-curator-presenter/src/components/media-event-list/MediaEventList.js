import React, { Component } from 'react';
import MediaEvent from '../media-event/MediaEvent'
import SocialMediaEventSource from '../event-source/SocialMediaEventSource'
import moment from 'moment';
import './MediaEventList.css';

class MediaEventList extends Component {
	constructor(props) {
		super(props);
		this.eventSource = new SocialMediaEventSource();
		this.state = {
			eventList: null
		};
	}
	
	componentDidMount() {
		this.eventSource.addMessageHandler((eventListUpdate) => this.setState({
			eventList: eventListUpdate
		}));
	}
	
	_renderEventList() {
		return this.state.eventList.map((event, index, eventList) => {
			return (
			<MediaEvent 
				key={event.id}
				created={event.created}
				text={event.text}
				userImage={event.userImage}
				userName={event.userName}
			/>
			);
		});
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