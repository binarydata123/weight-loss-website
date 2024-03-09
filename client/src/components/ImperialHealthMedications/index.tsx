import React from 'react'
import './style.css'
import Titles from '@/commanUl/Titles'
import { Col, Image, Row } from 'antd'
import ParaText from '@/commanUl/ParaText'
export default function ImperialHealthMedications() {
  return (
    <div style={{backgroundColor:'#F5F5F5'}}>
        <div className='customContainer' id='connectLoss'>
                <Row align='middle' gutter={[24,24]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <div className='cardType'>
                          <Titles level={2} className='textUppercase' color='primaryColor'> <span className='spanBlack'>What Are </span>Imperial Health 
                            Medications?</Titles>
                            <div className='gapMarginTop'></div>
                         <ParaText size='small' color='black' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here </ParaText>
                  <div className='gapMarginTop'></div>
                      <span>  <Image src='/home/appStore.png' preview={false} alt=' appStore'></Image></span>
                      <span style={{marginLeft:'10px'}}>  <Image src='/home/googlePay.png' preview={false} alt=' appStore'></Image></span>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <div className='cardType textCenter'>
                         <Image src='/home/phone.png' preview={false} alt='Social image '/>
                        </div>
                    </Col>
                </Row>
        </div>
    </div>
  )
}
