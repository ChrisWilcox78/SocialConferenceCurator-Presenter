import React, { Component } from 'react';
import './MediaEvent.css';
import moment from 'moment';

class MediaEvent extends Component {

	render() {
		return (
			<div className="media-event">
				<div className="user-details">
					<img src={this.props.userImage} alt={"Image of " + this.props.userName}/>
					<span className="user-name">
						{this.props.userName}
					</span>
				</div>
				<div className="creation-time">
					Created: {moment(this.props.created).format('LLL')}
				</div>
				<div className="main-content">
					{this.props.text}
				</div>
			</div>
		);
	}
}

export default MediaEvent;