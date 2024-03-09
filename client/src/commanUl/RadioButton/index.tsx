'use client';
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
export default function RadioButton() {
	const [value, setValue] = useState(1);
	const onChange = (e: RadioChangeEvent) => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
	};
	return (
		<>
			<div className="radioWraper customContainer">
				<Radio.Group onChange={onChange} value={value}>
					<Radio value={1}>Click One</Radio>
					<Radio value={2}>Click Two</Radio>
				</Radio.Group>
			</div>
		</>
	);
}
