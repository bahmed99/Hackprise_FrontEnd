import React from "react";
import ReactPlayer from "react-player";
import { Container, Row, Col } from 'react-bootstrap';
import { Reveal,Fade } from 'react-reveal';
function Plateforme() {
  return (
    <>
    
    <div className="about-area-wrapper sm-top">
      <Container fluid>
          <Row>
            <Col lg="6" md="12">
              <Reveal left>
                {/*<ReactPlayer  width='100%' height='' loop={true} playing={true}  muted={true} url={require("../../assets/videos/forum2.mp4")} />*/}
                <img src={require("../../assets/img/Lobby.jpg").default} />
              </Reveal>
            </Col>

            <Col lg="6" md="12" style={{textAlign:'center',paddingTop:'6%'}}>
            <Container >
              <Fade>
                <h2 className="title">La Plateforme</h2>
              </Fade>
              <Reveal bottom>
                <p className="description" >
                Nous mettrons à votre disposition une plateforme assez avnacée pour vous garantir une expérience inédite ! Vous permettant d’interagir avec les représentants des entreprises grâce à des stands en 3D, vous aurez la possibilité de déposer vos CVs ainsi que de décrocher des entretiens en ligne.
Ce n’est pas fini ! L’auditorium vous offrira l’opportunité d’assister à une diffusion directe de la table ronde.
                </p>
              </Reveal>
            </Container>
            </Col>
            

          </Row>
          </Container>
      </div>
      
    </>
  );
}

export default Plateforme;