import React from 'react';
import { Switch as AntSwitch } from 'antd';
export default function Switch() {
	return (
		<>
			<div className="switchWraper customContainer">
				<AntSwitch defaultChecked />
			</div>
		</>
	);
}
