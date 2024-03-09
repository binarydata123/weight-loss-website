'use client';
import './style.css';
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
export default function ToggleOpen() {
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};
	return (
		<>
			<div className="toggleOpen customContainer">
				<Button type="primary" onClick={showDrawer}>
					Open
				</Button>
				<Drawer title="Basic Drawer" placement="left" onClose={onClose} open={open}>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Drawer>
			</div>
		</>
	);
}
