import React from 'react';
import { Avatar, Badge as AntBadge } from 'antd';

export default function Badge() {
	return (
		<>
			<div className="customContainer">
				<a href="#">
					<AntBadge count={2} color="blue">
						<Avatar shape="square" size="small" />
					</AntBadge>
				</a>
			</div>
		</>
	);
}
