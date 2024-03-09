import { Col, Image, Row } from 'antd';
import React from 'react';
import './style.css';
import PrimaryButton from '@/commanUl/PrimaryButton';
export default function ImperialHealthWeightLoss() {
	return (
		<>
			<div>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={24} md={24} lg={8} xl={6} xxl={6}>
						<Image src="/home/weight.png" alt="weight loss" preview={false} className="responsive-image" />
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={10} xxl={10} className="">
						<div className="textCenterContent">
							<h6>Welcome Here</h6>
							<h2>
								imperial health <br /> weight loss
							</h2>
							<p>
								ts a familiar story: You pledge to honor a daily elliptical routine and count every last
								calorie. But soon, you re eating cupcakes at the office and grabbing happy hour mojitos,
								thinking, Oops, diet over.
							</p>
							<div className="flex">
								<p className="">
									ASK AN EXPERT
									<Image src="/home/arrow.png" alt=" arrow " preview={false} />
								</p>

								<PrimaryButton label="More Info" />
							</div>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="">
						<div className="diabetes" style={{ borderLeft: '1px solid #E0E0E0' }}>
							<div className="diabetesContent" style={{ borderBottom: '1px solid #E0E0E0 ' }}>
								<Row gutter={[16, 16]}>
									<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
										<div className="">
											<Image
												src="/home/image.png"
												alt="Diabetes "
												preview={false}
												className="responsiveImage"
											/>
										</div>
									</Col>
									<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
										<div className="">
											<h4>
												Diabetes <br /> Management
											</h4>
										</div>
									</Col>
								</Row>
							</div>
							<div className="diabetesContent" style={{ paddingTop: '70px' }}>
								<Row gutter={[16, 16]}>
									<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
										<div className="">
											<Image
												src="/home/image.png"
												alt="Diabetes "
												preview={false}
												className="responsiveImage"
											/>
										</div>
									</Col>
									<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
										<div className="">
											<h4>
												Diabetes <br /> Management
											</h4>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}
