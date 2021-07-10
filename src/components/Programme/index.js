import React, { useState ,useEffect} from 'react'
import { Col } from 'react-bootstrap'
import TimelineWrap from '../Timeline'
import Timeline from '../Timeline/TimelineItem'
import SectionTitle from '../Utilities/SectionTitle'
import { Reveal, Fade } from 'react-reveal';

export default function Programme() {
    const [visible, setVisible] = useState();
   useEffect(() => {
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


    },[]);
    return (
        <>
            <div className="member-details-bottom" style={{ paddingTop: '1%', paddingBottom: '7%' }} id='programme'>

                <div className="col-xl-6 m-auto text-center" >
                    <div className="member-education mem-achieve-item">
                        <Fade big>
                            <SectionTitle
                                heading={'Programme'}

                            /></Fade>
                    </div>

                    <div className="col-12" style={{ overflowX: visible ? 'auto' : 'visible', paddingTop: '35px' }}>
                        <div className="education-content-wrap mt-60 test" style={{ display: "flex", alignItems: 'center', justifyContent: !visible ? 'center' : '', paddingTop: '40px' }}>
                            
                     

                            
                             <Col xs='8' sm="4" xl="8" lg="4" >
                                <Reveal bottom>

                                    <TimelineWrap icon={'data.png'} title={'Infor'}>

                                        <Timeline
                                            degree={'educationItem.degree'}
                                            institute={"Présentation du sujet"}
                                            duration={'9h'}
                                        />
                                        <Timeline
                                            degree={'food-stand.png'}
                                            institute={'Développement des solutions'}
                                            duration={'9h30'}
                                        />
                                        <Timeline
                                            degree={'workshop.png'}
                                            institute={'Pause déjeuner'}
                                            duration={'14h30'}
                                        />
                                        <Timeline
                                            degree={'workshop.png'}
                                            institute={'Fin pause déjeuner'}
                                            duration={'15h'}
                                        />
                                        <Timeline
                                            degree={'workshop.png'}
                                            institute={'Pitch'}
                                            duration={'15h30'}
                                        />
                                        <Timeline
                                            degree={'workshop.png'}
                                            institute={'Fin du pitch'}
                                            duration={'16h20'}
                                        />
                                         <Timeline
                                            degree={'workshop.png'}
                                            institute={'Déliberation'}
                                            duration={'16h35'}
                                        />

                                    </TimelineWrap>


                                </Reveal>
                            </Col>
                            <Col xs='8' sm="4" xl="8" lg="4" >
                                <Reveal bottom>

                                    <TimelineWrap icon={'entrepreneur.png'} title={'STB'} >
                                      
                                    <Timeline
                                            degree={'educationItem.degree'}
                                            institute={"Présentation des sujets"}
                                            duration={'9h'}
                                        />
                                        <Timeline
                                            degree={'food-stand.png'}
                                            institute={'Développement des solutions'}
                                            duration={'9h30'}
                                        />
                                         <Timeline
                                            long={false}
                                        />
                                        <Timeline
                                            degree={'food-stand.png'}
                                            institute={'Fin du développement'}
                                            duration={'19h30'}
                                        />
                                       
                                        <Timeline
                                            degree={'workshop.png'}
                                            institute={'Pitch'}
                                            duration={'20h'}
                                        />
                                        <Timeline
                                            degree={'workshop.png'}
                                            institute={'Fin du pitch'}
                                            duration={'20h30'}
                                        />
                                         <Timeline
                                            degree={'workshop.png'}
                                            institute={'Déliberation'}
                                            duration={'20h45'}
                                        />

                                    </TimelineWrap>


                                </Reveal>
                            </Col> 

                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
