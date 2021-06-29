import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../NavBar/index.js"
import Footer from "../Footer/index.js"

import "../../assets/css/aboutPage.css"
import Video from '../Video/index.js';

export default function Infor() {
    return (


        <div>
            
            <div className="textContainer container">
                <h1>
                    À propos Hackathon Infor</h1>

                <p>La Jt voire la mécanique, etc. De ce fait, t de différentes demandes du marché. Afin de garantir sa pérennité, la Junior Entreprise, pourvue de la fraîcheur de ses membres talentueux et inventifs s’est toujours obstinée à consolider son primordial pilier, à savoir l’axe projet, en consacrant toutes ses ressources pour le renforcer. Ce dernier, étant la pierre angulaire de chaque JE, présente la chambre d’opérations où les jeunes entrepreneurs veillent à réaliser les différents projets prospectés afin de répondre, dans les moindres détails, aux aspirations de ses clients. De toute évidence, la Junior Entreprise, reposant aussi sur la qualité de ses prestations, s’est imposée dans le marché concurrentiel comme une indubitable panacée pour sa clientèle de gagner en qualité ainsi que réduire véritablement les coûts. Un nombre aussi important de Junior Entreprises dans le monde entier ne les a jamais empêchées de se réunir ni de se connecter. En effet, toutes les JE à travers le globe se retrouvent tous les deux ans lors de la Junior Enterprise World Conference (JEWC) et chaque année, elles fêtent, le 22 Novembre, le Junior Enterprise World Day (JEWD). Avec la fondation de Junior Entreprises Global, s’est déclaré le JE Global Forum, durant lequel se discutent les prochaines démarches à suivre par le mouvement international.Pour mieux connaître ses membres et les intégrer dans l’entité, la confédération tunisienne des Junior Entreprises, organise, à son tour, plusieurs occasions où les juniors entrepreneurs se rassemblent et peuvent élargir leurs réseaux. La JET est donc connue par ses séminaires qui ont pour but d’offrir aux membres junior l’opportunité de débattre sur des sujets qui touchent à la société et à la jeunesse plus précisément. Il s’agit de deux séminaires principaux ; JOBS qui se déroule généralement, en décembre, et qui traite chaque année un sujet d’actualité et le JET Spring Seminar qui, comme son nom l’indique, aura lieu au printemps et qui œuvre à nourrir le savoir-faire et les connaissances de chaque junior entrepreneur. Et parmi les événements phares de la JET, nous citons la JET’xpo qui est le plus grand salon entrepreneurial organisé par des étudiants et au sein duquel se présentent toutes les JE tunisiennes ainsi que plusieurs entreprises offrant des opportunités professionnelles.Tout bien considéré, le mouvement des Junior Entreprises s’agrandit jour après jour pour atteindre plusieurs régions laissant à la JE Global la mission de réunir toutes les entités du monde enti .</p>
                <div className="logoContainer">
                    <img src={require("../../assets/img/partenaires/infor.jpg").default} width="390px" alt="infor" />
                    <img src={require("../../assets/img/logo/EJE + Text.png").default} width="200px" alt="eje" />
                </div>
                <div className="btnContainer" >
                    <Link to="/" className="btn-outline" >Accueil</Link>
                    <Link to="/register" className="btn-outline" >S'inscrire</Link>
                </div>

            </div>


            <Footer />
        </div>


    )
}
