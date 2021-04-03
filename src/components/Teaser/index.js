import React from "react";
import ReactPlayer from "react-player";
// reactstrap components
import {Container, Row, Col } from 'react-bootstrap';
import { Reveal,Fade } from 'react-reveal';
// core components

function Teaser() {
  return (
    <>
    
    <div className="about-area-wrapper sm-top">
      <Container fluid>
          <Row>

            <Col lg="6" md="12" style={{textAlign:'center',paddingBottom:'6%'}}>
            <Container >
              <Fade big>
              <h2 className="title">La Thématique du forum</h2>
              </Fade>
              <Reveal bottom>
              <p className="description" >
              Le numérique influence fortement le domaine de la santé, bouleversant dès à présent la recherche médicale tout autant que l’organisation des soins. L’e-santé (ou santé numérique) fait référence à « l’application des technologies de l’information et de la communication (TIC) à l’ensemble des activités en rapport avec la santé ».
              Puisque le domaine de l'IT est en évolution continue ces drnères années, son impact dans le domaine de la santé ne cesse d’augmenter. L’intelligence artificielle, la science des données, la vision par ordinateur, l’internet des objets ainsi que la robotique font progresser le domaine 
              de la santé, et dans 
              les prochaines années 
              on verra une révolution 
              comme jamais auparavant 
              où l’automatisation verra le jour 
              dans le domaine de la santé.
              </p>
              </Reveal>
            </Container>
            </Col>
            
            <Col lg="6" md="12">
            <Reveal right>
              <ReactPlayer  width='100%' height='' loop={true} playing={true}  muted={true} url={require("../../assets/videos/1234.m4v").default} />
            </Reveal>
            </Col>
          </Row>
          </Container>
      </div>
      
    </>
  );
}

export default Teaser;