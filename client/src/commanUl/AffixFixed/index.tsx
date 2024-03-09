'use client';
import React from 'react';
import { Affix, Button } from 'antd';
export default function AffixFixed() {
	const [top, setTop] = React.useState<number>(100);
	const [bottom, setBottom] = React.useState<number>(100);
	return (
		<>
			<div className="affixWraper customConatiner">
				<Affix offsetTop={top}>
					<Button type="primary" onClick={() => setTop(top + 10)}>
						Affix top
					</Button>
				</Affix>
				<br />
				<Affix offsetBottom={bottom}>
					<Button type="primary" onClick={() => setBottom(bottom + 10)}>
						Affix bottom
					</Button>
				</Affix>
			</div>
		</>
	);
}
