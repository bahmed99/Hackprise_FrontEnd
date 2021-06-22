import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import TimelineWrap from '../Timeline'
import Timeline from '../Timeline/TimelineItem'
import SectionTitle from '../Utilities/SectionTitle'
import { Reveal, Fade } from 'react-reveal';

export default function Programme() {
    const [visible, setVisible] = useState();
    React.useEffect(() => {
        if (window.screen.width < 600) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
        window.onresize = function () {
            if (window.screen.width < 600) {
                setVisible(true)
            }
            else {
                setVisible(false)
            }
        }


    });
    return (
        <>
            <div className="member-details-bottom" style={{ paddingTop: '3%', paddingBottom: '7%' }} id='programme'>

                <div className="col-xl-6 m-auto text-center" >
                    <div className="member-education mem-achieve-item">
                        <Fade big>
                            <SectionTitle
                                heading={'Programme'}

                            /></Fade>
                    </div>

                    <div className="col-12" style={{ overflowX: visible ? 'auto' : 'visible', paddingTop: '35px' }}>
                        <div className="education-content-wrap mt-60 test" style={{ display: "flex", alignItems: 'center', justifyContent: !visible ? 'center' : '' }}>
                            {/* <Col xs='8' sm="4" xl="8" lg="4"  >
                                <Reveal left>
                                    <TimelineWrap icon={'food-stand.png'} title={'Stand'} >

                                        <Timeline
                                            degree={'educationItem.degree'}
                                            institute={'Début'}
                                            duration={'8h30'}
                                        />
                                        <Timeline
                                            degree={'educationItem.degree'}
                                            institute={'Fin'}
                                            duration={'17h30'}
                                        />


                                    </TimelineWrap>
                                </Reveal>
                            </Col> */}

                            
                            <Col xs='8' sm="4" xl="8" lg="4" >
                                <Reveal bottom>

                                    <TimelineWrap icon={'workshop.png'} title={'Hackathon'}>

                                        <Timeline
                                            degree={'educationItem.degree'}
                                            institute={"Mot d'ouverture"}
                                            duration={'8h30'}
                                        />
                                        <Timeline
                                            degree={'food-stand.png'}
                                            institute={'Présentation des entreprises'}
                                            duration={'10h'}
                                        />
                                        <Timeline
                                            degree={'workshop.png'}
                                            institute={'Table Ronde'}
                                            duration={'13h'}
                                        />
                                        <Timeline
                                            degree={'workshop.png'}
                                            institute={'Mot de clôture'}
                                            duration={'17h'}
                                        />

                                    </TimelineWrap>


                                </Reveal>
                            </Col>

                            {/* <Col xs='8' sm="4" xl="8" lg="4">
                                <Reveal right>
                                    <TimelineWrap icon={'amphitheatre.png'} style={{ display: window.screen.width < 440 ? "none" : "" }} title={'Auditorium'}>

                                        <Timeline
                                            degree={'educationItem.degree'}
                                            institute={'Première session'}
                                            duration={'10h'}
                                        />
                                        <Timeline
                                            degree={'educationItem.degree'}
                                            institute={'Deuxième session'}
                                            duration={'14h'}
                                        />


                                    </TimelineWrap>
                                </Reveal>
                            </Col> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
