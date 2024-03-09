import { Col, Image, Row } from 'antd';
import React from 'react';
import './style.css';
import PrimaryButton from '@/commanUl/PrimaryButton';
import Link from 'next/link';
import ParaText from '@/commanUl/ParaText';
import Titles from '@/commanUl/Titles';
export default function ImperialHealthWeightLoss() {
	return (
		<>
			<div>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={24} md={24} lg={24} xl={6} xxl={6}>
						<Image src="/home/weight.png" alt="weight loss" preview={false} className="responsive-image" />
					</Col>
					<Col xs={24} sm={24} md={24} lg={24} xl={10} xxl={10} >
						<div className="textCenterContent">
							<ParaText size='medium' color='black' className='textUppercase' style={{letterSpacing:'12px'}}>Welcome Here</ParaText>
							<Titles level={2} color='primaryColor' className='textUppercase'>
								imperial health <br /> weight loss
							</Titles>
							<ParaText size='medium' color='black'>
								ts a familiar story: You pledge to honor a daily elliptical routine and count every last
								calorie. But soon, you re eating cupcakes at the office and grabbing happy hour mojitos,
								thinking, Oops, diet over.
							</ParaText>
							<div className="flex">
								<div className='arrowStyle'>
								<ParaText size='large' color='black' >
									ASK AN EXPERT
								</ParaText>
                         <div className='fixedThis'>
							<Image src="/home/arrow.png" alt=" arrow " preview={false} className='dBlock' />
							</div>
								</div>
								<PrimaryButton label="More Info" />
							</div>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={8} >
						<div className="diabetes" style={{ borderLeft: '1px solid #E0E0E0' }}>
							<div className="diabetesContent" style={{ borderBottom: '1px solid #E0E0E0 ' }}>
								<Row gutter={[16, 16]} align='middle'>
									<Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
										<div >
											<Image
												src="/home/image.png"
												alt="Diabetes "
												preview={false}
												className="responsiveImage"
											/>
										</div>
									</Col>
									<Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
										<div className="management">
											<Titles level={4} color='black'>
												Diabetes <br /> Management
											</Titles>
											<Link href=''>
											<ParaText size='large' color='black'  >
											Read More
								                	<Image src="/home/arrow.png" alt=" arrow " preview={false} />
								                </ParaText>
											</Link>

										</div>
									</Col>
								</Row>
							</div>
							<div className="diabetesContent" style={{ paddingTop: '70px' }}>
								<Row gutter={[16, 16]} align='middle'>
									<Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
										<div >
											<Image
												src="/home/image.png"
												alt="Diabetes "
												preview={false}
												className="responsiveImage"
											/>
										</div>
									</Col>
									<Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
										<div className="management">
											<Titles level={4} color='black'>
											Telemedicine 
                                             <br /> Clinic
											</Titles>
											<Link href=''>
											<ParaText  size='large' color='black'   >
											Read More
								                	<Image src="/home/arrow.png" alt=" arrow " preview={false} />
								                </ParaText>
											</Link>

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
