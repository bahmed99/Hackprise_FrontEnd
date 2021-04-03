import React, {Fragment,useState} from 'react';


import Services from '../components/Partenaires'
import Team from "../components/Conference";
import BrandLogo from "../components/Sponsor";
import Funfact from "../components/Funfact";
import Footer from "../components/Footer";
import Testimonials from "../components/Test";

import Teaser from '../components/Teaser';
import Video from '../components/Video';
import '../assets/css/video.css'
import Apropos from '../components/Apropos';
import Programme from '../components/Programme';
import NavBar from '../components/NavBar';
import Plateforme from '../components/Plateforme';


const HomeOne = () => {
    let [screen, setScreen]=useState()
    let [scale, setScale]=useState()
    window.onresize = function(){
        if(window.innerWidth>1200)
        {
            setScreen(true)
        }
        else
        {
            setScreen(false)
        }
        if(window.innerWidth<450)
        {
            setScale(100)

        }
        else
        {
            setScale(40)
        }
     }
   
    React.useEffect(() => {

    
        if(window.innerWidth>1200)
        {
            setScreen(true)

        }
        else
        {
            setScreen(false)
        }
        if(window.innerWidth<450)
        {
            setScale(100)

        }
        else
        {
            setScale(40)
        }
        
    })
    
    const [y, setY]=useState('')
    window.addEventListener('scroll', function(e) {
        if(window.scrollY>0)
        {
            setY('rgba(31, 33, 45,0.3)')
        }
        else
        {
            setY('rgba(0,0,0,0)')
        }
        
    })

    return (
        <Fragment>
            <NavBar y={y} screen={screen} scale={scale}/>
            <Video/>
            <div id="apropos">
            <Apropos/>
                <hr style={{width:'70%',marginLeft:'15%'}}/>
                <Teaser id='plateforme'/>
            </div>
            <div id='partenaires'>
                <Services classes="sm-top-wt"/>
                <hr style={{width:'70%',marginLeft:'15%'}}/>
                <Plateforme/>
            </div>
            <Funfact/>
            <Programme />
            <Team/>
            <div id ="sponsors">
                <Testimonials/>
                <BrandLogo/>
            </div>
            
            <Footer/>
           
        </Fragment>
    );
};

export default HomeOne;