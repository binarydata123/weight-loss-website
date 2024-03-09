'use client';
import React from 'react';
import { Input, QRCode as AntQRCode, Space } from 'antd';

export default function MyQRCode() {
	const [text, setText] = React.useState('https://connectlegal.ae/');

	return (
		<div className="customContainer">
			<Space direction="vertical" align="center">
				<AntQRCode value={text || '-'} />
				<Input placeholder="-" maxLength={60} value={text} onChange={(e) => setText(e.target.value)} />
			</Space>
		</div>
	);
}
