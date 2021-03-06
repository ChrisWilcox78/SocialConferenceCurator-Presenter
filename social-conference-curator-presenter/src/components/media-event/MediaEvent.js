// @flow

import React, { Component } from 'react';
import './MediaEvent.css';
import moment from 'moment';

type Props = {
	userImage: string,
	screenName: string,
	text: string,
	createdDate: Date
}

class MediaEvent extends Component<Props, {}> {

	render() {
		return (
			<div className="media-event">
				<div className="user-details">
					<img src={this.props.userImage} alt={"Image of " + this.props.screenName}/>
					<span className="user-name">
						{this.props.screenName}
					</span>
				</div>
				<div className="creation-time">
					Created: {moment(this.props.createdDate).format('LLL')}
				</div>
				<div className="main-content">
					{this.props.text}
				</div>
			</div>
		);
	}
}

export default MediaEvent;