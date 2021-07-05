import React from 'react'

import '../../assets/css/about.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Reveal, Fade } from 'react-reveal';
import { Link } from "react-router-dom";

export default function index({ mobile }) {
    return (
        <>
            {mobile ? <Reveal left>
                <div className="about-section">
                    <div className="inner-container" style={{ textAlign: 'center' }}>
                        <Reveal top>
                            <h1 >À propos du Hack'Prise</h1>

                            <p>
                                Suite au succès incontestable de la 15ème édition du Forum Annuel de l'ENSI, l’ENSI Junior Entreprise est de retour pour organiser la première édition de son nouvel évènement Hack ’Prise.
                                Fidèle à ses traditions, L’ENSI Junior Entreprise, ne cesse pas d’innover et vous présente l’opportunité de participer à une compétition hybride qui se déroulera le 14 Juillet.
                                L'événement est reparti en deux hackathons avec deux entreprises de grande renommée et des sujets diversifiés qui varient de l'IT à l'entrepreneuriat qui ont un fort impact social et technologique.
                                Accompagné par un soutien technique tout au long de la compétition, vous auriez la chance de gagner des prix exceptionnels.
                                Soyez parmi les créateurs des solutions futures aux problèmes de la Tunisie d’aujourd’hui en participant à une expérience aussi enrichissante sur le plan personnel que sur le plan professionnel.                            </p>
                            <div className="btnContainer">

                                <Link to="/about/infor" className="btn-outline" >Hackathon Infor</Link>
                                <Link to="/about/stb" className="btn-outline" >Hackathon STB</Link>
                            </div>

                        </Reveal>
                    </div>

                </div>
            </Reveal> :
                <div style={{ textAlign: 'center', paddingTop: '6%', paddingBottom: '3%' }}>
                    <Container >
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <Fade big>
                                    <h2 className="title">À propos du Hack'Prise</h2>
                                </Fade>
                                <Reveal bottom>
                                    <p className="description">
                                        Suite au succès incontestable de la 15ème édition du Forum Annuel de l'ENSI, l’ENSI Junior Entreprise est de retour pour organiser la première édition de son nouvel évènement Hack ’Prise.
                                        Fidèle à ses traditions, L’ENSI Junior Entreprise, ne cesse pas d’innover et vous présente l’opportunité de participer à une compétition hybride qui se déroulera le 14 Juillet.
                                        L'événement est reparti en deux hackathons avec deux entreprises de grande renommée et des sujets diversifiés qui varient de l'IT à l'entrepreneuriat qui ont un fort impact social et technologique.
                                        Accompagné par un soutien technique tout au long de la compétition, vous auriez la chance de gagner des prix exceptionnels.
                                        Soyez parmi les créateurs des solutions futures aux problèmes de la Tunisie d’aujourd’hui en participant à une expérience aussi enrichissante sur le plan personnel que sur le plan professionnel.
                                    </p>
                                    <div className="btnContainer">

                                        <Link to="/about/infor" className="btn-outline" >Hackathon Infor</Link>
                                        <Link to="/about/stb" className="btn-outline" >Hackathon STB</Link>
                                    </div>
                                </Reveal>
                                <br />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col md="3" >

                            </Col>

                            <Col md="3" style={{ padding: '20px' }}>
                                <Reveal left>
                                    <img
                                        width="60%"
                                        alt="..."
                                        src={require("../../assets/img/logo/EJE + Text.png").default}
                                    />
                                </Reveal>
                            </Col>
                        </Row>
                    </Container>
                </div>



            }
        </>
    )
}
