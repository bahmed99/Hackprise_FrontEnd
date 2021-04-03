import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Reveal, Fade } from 'react-reveal';
export default function Apropos() {

  return (
    <div style={{ textAlign: 'center', paddingTop: '6%', paddingBottom: '3%' }}>
      <Container >
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Fade big>
              <h2 className="title">À propos du Forum</h2>
            </Fade>
            <Reveal bottom>
              <p className="description">
                La journée porte ouverte est l’événement phare et la fierté de l’ENSI. Cette année, la quinzième édition du forum annuel aura un aspect innovant pour garantir la sécurité des entreprises et des étudiants. En effet, une éxperience 3D vous attend pour vivre une édition exceptionnelle, soyez les bienvenus le 28 Novembre 2020.
                Durant cette journée, L’ENSI ouvrira grand ses portes virtuelles, aux étudiants, enseignants et surtout aux entreprises les plus prestigieuses à l’échelle nationale et internationale. Ces entreprises auront des stands en 3D mis à leur disposition afin de tisser des liens et rencontrer nos meilleurs éléments ainsi que d’accepter les candidatures de PFE et de stage.
                Ainsi, pendant cette journée, nous mettons à votre disposition un espace ouvert de recrutement et d’interaction avec les responsables des plus grandes entreprises.
                  </p>
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


          <Col md="3" style={{ padding: '20px' }}>
            <Reveal right>
              <img
                width="60%"
                alt="..."
                src={require("../../assets/img/logo/logoEnsi.png").default}
              />
            </Reveal>
          </Col>

          <Col md="3">
          </Col>
        </Row>
      </Container>
    </div>
  )
}