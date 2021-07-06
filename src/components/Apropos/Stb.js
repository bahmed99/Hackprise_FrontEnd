import React from 'react'
import Navbar from "../NavBar/index.js"
import Footer from "../Footer/index.js"

import { Link } from "react-router-dom";

function Stb() {
    return (

        <div >

            <div className="container textContainer">
                <h1>
                    À propos Hackathon STB</h1>

                <p className="txt">À travers cette opportunité, vous auriez la possibilité de développer votre créativité, votre innovation et votre esprit entrepreneurial. Dans une dizaine d'heures, vous seriez accompagnés des experts qui vous guideront tout au long de votre aventure dont laquelle vous trouverez des solutions technologiques qui touchent aux domaines du tourisme médical et de l'agriculture.
                    Pour plus d'informations, suivez la page de l'événement et ne manquez aucune publication qui vous sera utile.</p>
                <div className="logoContainer1">
                    <img className="ima" src={require("../../assets/img/partenaires/stb.jpg").default} width="350px" alt="infor" />
                    <img className="ima" src={require("../../assets/img/logo/EJE + Text.png").default} width="200px" alt="eje" />
                </div>
                <div className="btnContainer" >
                    <Link to="/" className="btn-outline" >Accueil</Link>
                    <Link to="/register" className="btn-outline" >S'inscrire</Link>
                </div>
            </div>


            <br /><br /><br /><br />
            <Footer />
        </div>
    )
}

export default Stb
