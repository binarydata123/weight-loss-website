'use client';
import './style.css'; // You can define your watermark styles in a separate CSS file
import React from 'react';
import { Watermark } from 'antd';
export default function WaterMarkDetail() {
	return (
		<div className="customContainer watermark-container">
			<Watermark content="Binarydata">
				<div style={{ height: 500 }} />
			</Watermark>
		</div>
	);
}
