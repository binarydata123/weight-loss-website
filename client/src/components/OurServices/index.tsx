import React from 'react'
import './style.css'
import Titles from '@/commanUl/Titles'
import { Col, Image, Row } from 'antd'
import ParaText from '@/commanUl/ParaText'
import Link from 'next/link'
export default function OurServices() {
  return (
    <div>
        <div className='customContainer' id='connectLoss'>
                <Titles level={2} className='textCenter' color='primaryColor'>
                Our Services
                </Titles>
                <Row align='middle' gutter={[24,24]} style={{padding:'80px 0px'}}>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                    <div className="column">
                      <div className="card">
                        <div className="content">
                          <div className="front">
                            <Image src='/home/Rectangle.jpg' preview={false} alt='Social image '/>
                          </div>
                          <div className="back from-right">
                            <ParaText size='large' color='black'>Female Hormone 
                              Replacement</ParaText>
                              <ParaText className='dBlock' size='extraSmall' color='black'>Research shows that taking small steps – not giant leaps — is the best way to get lasting results.</ParaText>
                           <div className='gapMarginTop'></div>
                              <Link href=''>
                                <ParaText size='extraSmall' color='primaryColor'>Read More</ParaText>
                              </Link>

                          </div>
                        </div>
                      </div>
                    </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                    <div className="column">
                      <div className="card">
                        <div className="content">
                          <div className="front">
                            <Image src='/home/Rectangle1.jpg' preview={false} alt='Social image '/>
                          </div>
                          <div className="back from-right">
                            <ParaText size='large' color='black'>Female Hormone 
                              Replacement</ParaText>
                              <ParaText className='dBlock' size='extraSmall' color='black'>Research shows that taking small steps – not giant leaps — is the best way to get lasting results.</ParaText>
                           <div className='gapMarginTop'></div>
                              <Link href=''>
                                <ParaText size='extraSmall' color='primaryColor'>Read More</ParaText>
                              </Link>

                          </div>
                        </div>
                      </div>
                    </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                     <div className="column">
                      <div className="card">
                        <div className="content">
                          <div className="front">
                            <Image src='/home/Rectangle2.jpg' preview={false} alt='Social image '/>
                          </div>
                          <div className="back from-right">
                            <ParaText size='large' color='black'>Female Hormone 
                              Replacement</ParaText>
                              <ParaText className='dBlock' size='extraSmall' color='black'>Research shows that taking small steps – not giant leaps — is the best way to get lasting results.</ParaText>
                           <div className='gapMarginTop'></div>
                              <Link href=''>
                                <ParaText size='extraSmall' color='primaryColor'>Read More</ParaText>
                              </Link>

                          </div>
                        </div>
                      </div>
                    </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                    <div className="column">
                      <div className="card">
                        <div className="content">
                          <div className="front">
                            <Image src='/home/Rectangle3.jpg' preview={false} alt='Social image '/>
                          </div>
                          <div className="back from-right">
                            <ParaText size='large' color='black'>Female Hormone 
                              Replacement</ParaText>
                              <ParaText className='dBlock' size='extraSmall' color='black'>Research shows that taking small steps – not giant leaps — is the best way to get lasting results.</ParaText>
                           <div className='gapMarginTop'></div>
                              <Link href=''>
                                <ParaText size='extraSmall' color='primaryColor'>Read More</ParaText>
                              </Link>

                          </div>
                        </div>
                      </div>
                    </div>
                    </Col>
                </Row>
        </div>
    </div>
  )
}
