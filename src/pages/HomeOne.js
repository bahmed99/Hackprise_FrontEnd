import React, {Fragment,useState} from 'react';


import Services from '../components/Partenaires'
import Team from "../components/Conference";
import BrandLogo from "../components/Sponsor";
import Funfact from "../components/Funfact";
import Footer from "../components/Footer";
import Exposition from '../components/Exposition';
import Teaser from '../components/Thematique';
import Video from '../components/Video';
import '../assets/css/video.css'
import Apropos from '../components/Apropos';
import Programme from '../components/Programme';
import NavBar from '../components/NavBar';



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
            <hr style={{width:'70%',marginLeft:'15%'}}/>
            <div id="apropos">
            <Apropos/>
                <hr style={{width:'70%',marginLeft:'15%'}}/>
                <Teaser id='plateforme'/>
            </div>
            <div id='partenaires'>
                <Services classes="sm-top-wt"/>
                <hr style={{width:'70%',marginLeft:'15%'}}/>
                
            </div>
            <Funfact />
            <Programme />
            
            <div id="exposition">
            <Exposition />
            </div>
            <Team/>
            <div id ="sponsors">
                
                <BrandLogo/>
            </div>
            
            
            <Footer/>
           
        </Fragment>
    );
};

export default HomeOne;