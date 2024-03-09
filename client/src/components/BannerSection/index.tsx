import React from 'react';
import './style.css';
import PrimaryButton from '@/commanUl/PrimaryButton';
export default function BannerSection() {
	return (
		<>
			<div className="" id="mainAdd">
				<div className="customContainer">
					<div className="contentBar">
						<h1>
							<span className="lightSize">
								Weight Loss is <br /> Not Just about the 
							</span>
							<br /> Calories and Exercise
						</h1>
						<div className="gapMarginTop"></div>
						<p>
							Fitness Zone is a complete sports/fitness theme that is suitable
							<br className="removeBar" /> for any one who is about to start a Fitness Center or a Sports{' '}
							<br className="removeBar" /> Website.
						</p>
						<div className="gapMarginTop"></div>
						<PrimaryButton label="Get An Appointment" />
					</div>
				</div>
			</div>
		</>
	);
}
