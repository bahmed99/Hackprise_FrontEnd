import Countdown from "react-countdown";
import React from 'react'

import Renderer from "../Utilities/countdown/Renderer";
import { Link } from "react-router-dom";

import {Reveal} from 'react-reveal';

export default function Video (props) {   
            

        return (     
            <> 
                <div className="video-text" style={{textAlign:"center"}} id="accueil">
                    <Reveal top big>  
                        <div className='video-conainer' >
                            <h3 className='test'  >Always Striving For Greatness</h3>
                            {/* <h1>La 1ère édition du Hack'prise</h1> */}
                            
                    <Countdown
                            date={new Date("July 14, 2021 8:00:00")}
                            renderer={Renderer}
                            />
                            <Link to="/register" className="btn-outline" >S'inscrire</Link>
                        </div> 
                    </Reveal>  
                </div> 
            </>
        )
    }
