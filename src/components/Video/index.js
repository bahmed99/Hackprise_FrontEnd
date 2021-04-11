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
                            <h1>La 1èr édition du [nom Événement]</h1>
                            
                    <Countdown
                            date={new Date("May 22, 2021 8:30:00")}
                            renderer={Renderer}
                            />
                            <Link to="/register" className="btn-outline" style={{marginTop:"3%"}}>S'inscrire</Link>
                        </div> 
                    </Reveal>  
                </div> 
            </>
        )
    }
