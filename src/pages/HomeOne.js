import React, { Fragment, useState ,useEffect} from 'react';


import Services from '../components/Partenaires'
import Team from "../components/Conference";
import BrandLogo from "../components/Sponsor";
import Funfact from "../components/Funfact";
import Footer from "../components/Footer";
import Blog from '../components/Blog/Blogs';
import Thematique from '../components/Thematique';
import Video from '../components/Video';
import '../assets/css/video.css'
import Apropos from '../components/Apropos';
import Programme from '../components/Programme';
import NavBar from '../components/NavBar';



const HomeOne = () => {
    let [screen, setScreen] = useState()
    let [scale, setScale] = useState()
    let [nb, setNb] = useState()
    let [wd, setWd] = useState()

    let [mobile, setMobile] = useState()
    

    window.onresize = function () {

        // if (window.innerWidth < 800) {
        //     setWd("60%")


        // }

        // else {
        //     setWd("85%")
        // }


        if (window.innerWidth > 1000) {
            setNb(3)


        }

        if (window.innerWidth < 450) {

            setNb(1)
        }


        if (window.innerWidth > 1200) {

            setScreen(true)

        }
        else {
            setScreen(false)
        }
        if (window.innerWidth < 450) {
            setScale(100)

        }
        else {
            setScale(40)
        }


        if (window.innerWidth < 800) {
            setMobile(false)

        }
        else {
            setMobile(true)
        }


        if (window.innerWidth > 500 && window.innerWidth < 780) {
            setNb(2)
        }
        if (window.innerWidth < 600) {
            setNb(1)
        }

    }

    useEffect(() => {


        // if (window.innerWidth < 550) {
        //     setWd("60%")
        // }

        // else {
        //     setWd("85%")
        // }


        if (window.innerWidth > 1000) {
            setNb(3)


        }

        if (window.innerWidth < 450) {

            setNb(1)
        }


        
        if (window.innerWidth < 800) {
            setMobile(false)

        }
        else {
            setMobile(true)
        }

        if (window.innerWidth > 1200) {

            setScreen(true)

        }
        else {
            setScreen(false)
        }
        if (window.innerWidth < 450) {
            setScale(100)

        }
        else {
            setScale(40)
        }

        if (window.innerWidth > 500 && window.innerWidth < 780) {
            setNb(2)
        }
        if (window.innerWidth < 600) {
            setNb(1)
        }

    },[])

    const [y, setY] = useState('')
    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 0) {
            setY('rgba(31, 33, 45,0.3)')
        }
        else {
            setY('rgba(0,0,0,0)')
        }

    })

    return (
        <Fragment>
            <NavBar y={y} screen={screen} scale={scale} />
            <Video />
            <hr style={{ width: '70%', marginLeft: '15%' }} />
            <div id="apropos">
                <Apropos mobile={mobile} />
                
                <hr style={{ width: '70%', marginLeft: '15%',marginTop:'6%' }} />
            

                {/* <Thematique id='thematique' mobile={mobile} /> */}
            </div>
            
            <div id='partenaires'>
                <Services classes="sm-top-wt" />
                <hr style={{ width: '70%', marginLeft: '15%',marginTop:'3%' }} />

            </div>
             <Funfact /> 
            <Programme />

            <div id="article">
                <Blog nb={nb}/>
            </div>

            {/* <div id="sponsors">
               
                <BrandLogo />
            </div> */}
            <br/>
            <br/>
            <br/>


            <Footer />

        </Fragment>
    );
};

export default HomeOne;