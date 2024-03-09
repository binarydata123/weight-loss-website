import React from 'react';
import './style.css';
import PrimaryButton from '@/commanUl/PrimaryButton';
import Titles from '@/commanUl/Titles';
import ParaText from '@/commanUl/ParaText';
export default function BannerSection() {
	return (
		<>
			<div className="" id="mainAdd">
				<div className="customContainer">
					<div className="contentBar">
						<Titles color='white' level={1} className='fontWeightThree'>
							<span className="lightSize">
								Weight Loss is <br /> Not Just about the 
							</span>
						</Titles>
						<Titles color='white' level={1} className='fontWeightEight'>
							Calories and Exercise
						</Titles>
						<div className="gapMarginTop"></div>
						<ParaText size='large' color='white'>
							Fitness Zone is a complete sports/fitness theme that is suitable
							<br className="removeBar" /> for any one who is about to start a Fitness Center or a Sports{' '}
							<br className="removeBar" /> Website.
						</ParaText>
						<div className="gapMarginTop"></div>
						<PrimaryButton label="Get An Appointment" />
					</div>
				</div>
			</div>
		</>
	);
}
