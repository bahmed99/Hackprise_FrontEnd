import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../Footer/index.js"

import "../../assets/css/aboutPage.css"

export default function Infor() {
    return (


        <div>
            
            <div className="textContainer container">
                <h1>
                    À propos Hackathon Infor</h1>
                <p className="txt">Weather is among the most important external influencing factors impacting retail sales and business. A lot of research work has been conducted to study the impact of weather events or unusual weather conditions on fluctuations in sales. Do you think weather is a core driver of consumer behavior ? Do you think we can control our response to the disruptive weather events? If you think so, then come and join us on July 14th in the Infor Data Science challenge to proof it out!</p>
                {/* <h2 className='test1'  >#Stay-Tuned</h2> */}
                <div className="logoContainer">
                    <img className="Image1" src={require("../../assets/img/partenaires/infor.jpg").default}  alt="infor" />
                    <img className="Image2" src={require("../../assets/img/logo/EJE + Text.png").default}  alt="eje" />
                </div>
                <div className="btnContainer" >
                    <Link to="/" className="btn-outline" >Accueil</Link>
                    <Link to="/register" className="btn-outline" >S'inscrire</Link>
                </div>

            </div>
            <br/><br/><br/><br/>


            <Footer />
        </div>


    )
}
