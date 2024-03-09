import React from 'react';
import './style.css';
import UserProfile from '../UserProfile';
import UserName from '../UserName';
export default function Notification() {
	return (
		<>
			<div className="customContainer">
				<div className="center">
					<div className="notificationContent">
						<div className="flex">
							<UserProfile />
							<div className="TextTitle">
								<UserName />
							</div>
						</div>
						<p>Important!</p>
						<p>Important!</p>
						<p>Important!</p>
						<p>Important!</p>
						<a href="#">all notification</a>
					</div>
				</div>
			</div>
		</>
	);
}
