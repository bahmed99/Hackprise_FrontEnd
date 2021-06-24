import React from 'react'
import '../../assets/css/thematique.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Reveal, Fade } from 'react-reveal';


export default function index({ mobile }) {
    return (
        <>
            {mobile ? <Reveal right>
                <div className="about-section1">

                    <div className="inner-container1" style={{ textAlign: 'center' }}>
                        <Reveal top>
                            <h1>La thématique du Hack'Prise</h1>

                            <p>
                                Le numérique influence fortement le domaine de la santé, bouleversant dès à présent la recherche médicale tout autant que l’organisation des soins. L’e-santé (ou santé numérique) fait référence à « l’application des technologies de l’information et de la communication (TIC) à l’ensemble des activités en rapport avec la santé ».
                                Puisque le domaine de l'IT est en évolution continue ces drnères années, son impact dans le domaine de la santé ne cesse d’augmenter. L’intelligence artificielle, la science des données, la vision par ordinateur, l’internet des objets ainsi que la robotique font progresser le domaine
                                de la santé, et dans
                                les prochaines années
                                on verra une révolution
                                comme jamais auparavant
                                où l’automatisation verra le jour
                                dans le domaine de la santé.                            </p>
                        </Reveal>

                    </div>

                </div>
            </Reveal> :
                <div style={{ textAlign: 'center', paddingTop: '6%', paddingBottom: '3%' }}>
                    <Container >
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <Fade big>
                                    <h2 className="title">La thématique du Hack'Prise</h2>
                                </Fade>
                                <Reveal bottom>
                                    <p className="description">
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
                                <br />
                            </Col>
                        </Row>
                        <br />
                        <br />

                    </Container>
                </div>
            }
        </>

    )
}
