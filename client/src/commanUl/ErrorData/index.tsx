'use client';
import './style.css';
import React from 'react';
import { Button, Result } from 'antd';
export default function ErrorData() {
	return (
		<>
			<div className="emptyData customContainer">
				<Result
					status="404"
					title="404"
					subTitle="Sorry, the page you visited does not exist."
					extra={<Button type="primary">Back Home</Button>}
				/>
			</div>
		</>
	);
}
