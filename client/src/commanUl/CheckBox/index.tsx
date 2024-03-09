import './style.css';
import React from 'react';
import { Checkbox, Col, Row } from 'antd';
export default function CheckBox() {
	return (
		<>
			<div className="customContainer">
				<Row>
					<Col span={8}>
						<div className="checkboxWraper">
							<Checkbox value="A">A</Checkbox>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}
