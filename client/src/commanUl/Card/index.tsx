'use client';
import React from 'react';
import './style.css';
import { Card as AntCard, Image } from 'antd';
const { Meta } = AntCard;
export default function Card() {
	return (
		<>
			<div className="customContainer">
				<AntCard
					hoverable
					style={{ width: 240 }}
					cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
				>
					<Meta title="Europe Street beat" description="www.instagram.com" />
				</AntCard>
			</div>
		</>
	);
}
