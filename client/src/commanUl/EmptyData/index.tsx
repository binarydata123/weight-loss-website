'use client';
import './style.css';
import React from 'react';
import { Empty } from 'antd';
export default function EmptyData() {
	return (
		<>
			<div className="emptyData customContainer">
				<Empty />
			</div>
		</>
	);
}
