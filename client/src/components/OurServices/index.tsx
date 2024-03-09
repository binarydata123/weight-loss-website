import React from 'react'
import './style.css'
import Titles from '@/commanUl/Titles'
import { Col, Image, Row } from 'antd'
import ParaText from '@/commanUl/ParaText'
export default function OurServices() {
  return (
    <div>
        <div className='customContainer' id='connectLoss'>
                <Titles level={2} className='textCenter' color='black'>
                Connect with a Weight Loss and
                Diabetes Specialist Immediately!
                </Titles>
                <Row align='middle' gutter={[24,24]} style={{padding:'100px 0px'}}>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        <div className='cardType textCenter'>
                         <Image src='/home/Social/image.png' preview={false} alt='Social image '/>
                         <Titles level={5} color='black' className='gapMarginTopTwo paddingBottomOne'>Enroll quickly and easily</Titles>
                         <ParaText size='small' color='black' >Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </ParaText>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                       <div className='cardType textCenter'>
                         <Image src='/home/Social/image2.png' preview={false} alt='Social image '/>
                         <Titles level={5} color='black' className='gapMarginTopTwo paddingBottomOne'>Schedule an appointment</Titles>
                         <ParaText size='small' color='black' >Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </ParaText>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                       <div className='cardType textCenter'>
                         <Image src='/home/Social/image3.png' preview={false} alt='Social image '/>
                         <Titles level={5} color='black' className='gapMarginTopTwo paddingBottomOne'>Connect with a specialist</Titles>
                         <ParaText size='small' color='black' >Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </ParaText>
                        </div>
                    </Col>
                </Row>
        </div>
    </div>
  )
}
