import React from 'react';
import SectionTitle from '../Utilities/SectionTitle'
import ServiceItem from './ServiceItem'
import ServicesData from '../../data/Partenaires/partenaires'
import SlickSlider from "../Utilities/Slick"
import serviceTopBg from '../../assets/img/tec.jpg'
import {Reveal } from 'react-reveal';

function Services({ classes }) {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 500,
        className: ` testimonial-grid`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }
    return (
        <div className={`service-area-wrapper ${classes}`} style={{ paddingBottom: '3%' }}>
            <div className="service-area-top" style={{ backgroundImage: `url("${serviceTopBg}")` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 m-auto text-center">
                            <SectionTitle variant="light" heading="<span style='color:#2EA3DD;'>Nos partenaires</span>" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-content-area">
                <div className="container partenaire" > 
                    <Reveal top >
                        <SlickSlider settings={settings} >

                             {
                                ServicesData.map(service => (
                                    <ServiceItem key={service.id} id={service.id} title={service.title} text={service.shortDesc} thumb={service.thumb}  />
                                ))
                            } 


                        </SlickSlider>

                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export default Services;