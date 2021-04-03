import React from 'react';
import SectionTitle from '../Utilities/SectionTitle'
import ServiceItem from  './ServiceItem'
import ServicesData from '../../data/Services/services'
import SlickSlider from "../Utilities/Slick"
import serviceTopBg from '../../assets/img/tec.png'
import { Fade } from 'react-reveal';
function Services({classes}) {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed:500,
        className: `testimonial-content--3 testimonial-grid`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    }
    return (
        <div className={`service-area-wrapper ${classes}`} style={{paddingBottom:'3%'}}>
            <div className="service-area-top" style={{backgroundImage: `url("${serviceTopBg}")`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 m-auto text-center">
                            <SectionTitle variant="light"  heading="<span style='color:#2EA3DD;'>Nos partenaires</span>" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-content-area">
                <div className="container">
                    <Fade big>
                        <SlickSlider settings={settings}>
                            
                            {
                                ServicesData.map(service=>(
                                    <ServiceItem key={service.id} id={service.id} title={service.title} text={service.shortDesc} thumb={service.thumb}/>
                                ))
                            }

                          <div className="service-item">
                <figure className="service-thumb">
                    
                        <img src={require('../../assets/img/partenaires/iobeya.jpg' )} alt="IObeya"/>
                    

                    <figcaption className="service-txt">
                        <h5>IObeya</h5>
                    </figcaption>
                </figure>
                <div className="service-content" >
                    <div className="service-content-inner" >
                        <h5>
                            IObeya
                        </h5>
                        <p>Faites partie de l’aventure !<br/>
"Depuis près de 10 ans, iObeya est une aventure logicielle et humaine.
Notre potion magique est de miser en priorité sur l’humain, en considérant que le succès de l'entreprise est la conséquence d'une équipe performante, unie par des valeurs fortes et un grand enthousiasme."
<br/>Cyril Daloz - CEO<br/>
Nos valeurs fondamentales nous guident sur la voie de la croissance.</p>
                    </div>
                </div>
            </div>
                        </SlickSlider>
                        
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Services;