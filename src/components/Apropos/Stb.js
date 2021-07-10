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

                <p className="txt">La STB en tant  qu’acteur fédérateur de la transformation contribue par la proposition de sujets vecteur d’innovation de deux secteurs clés de l’économie tunisienne.<br /> <br />
                    <p>Sujet 1 : Solution pour structurer et automatiser la relation entre des différents intervenants dans le secteur du tourisme médical.                                  </p>
                    <p>Sujet 2 : Solution de traçabilité des produits agroalimentaires.</p>  </p>
                <div className="logoContainer1">
                    <img className="ima " src={require("../../assets/img/partenaires/stb.jpg").default} width="350px" alt="stb" />
                    <img className="ima Image3" src={require("../../assets/img/logo/EJE + Text.png").default} alt="eje" />
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
