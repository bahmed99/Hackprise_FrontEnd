import Countdown from "react-countdown";
import React from 'react'

import Renderer from "../Utilities/countdown/Renderer";
import { Link } from "react-router-dom";

import {Reveal} from 'react-reveal';
import { ExternalLink } from 'react-external-link';
export default function Video (props) {   
            

        return (     
            <> 
                <div className="video-text" style={{textAlign:"center"}} id="accueil">
                    <Reveal top big>  
                        <div className='video-conainer' >
                            <h3 className='test' >Always Striving For Greatness</h3>
                            <h1>La 15ème édition du forum annuel de l'ENSI</h1>
                            <ExternalLink href="http://eventzoo-forumensi-11-2020.s3.eu-west-3.amazonaws.com/index.html" target={'_blank'}><h1 style={{fontSize:"50px"}}>Rejoindre la plateforme</h1></ExternalLink>
                    <Countdown
                            date={new Date("November 28, 2021 8:30:00")}
                            renderer={Renderer}
                            />
                            <Link to="/register" className="btn-outline" style={{marginTop:"3%"}}>S'inscrire</Link>
                        </div> 
                    </Reveal>  
                </div> 
            </>
        )
    }
