'use client';
import './style.css'; // You can define your watermark styles in a separate CSS file
import React, { useMemo } from 'react';
import { Button, notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
const Context = React.createContext({ name: 'Default' });
export default function NotificationBottomRight() {
	const [api, contextHolder] = notification.useNotification();

	const openNotification = (placement: NotificationPlacement) => {
		api.info({
			message: `Notification ${placement}`,
			description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
			placement
		});
	};

	const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);
	return (
		<>
			<div className="customContainer">
				<Context.Provider value={contextValue}>
					{contextHolder}
					<Button type="primary" onClick={() => openNotification('bottomRight')}>
						Notification
					</Button>
				</Context.Provider>
			</div>
		</>
	);
}
