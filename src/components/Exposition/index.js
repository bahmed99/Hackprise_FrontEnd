import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../Utilities/SectionTitle'
import data from '../../data/Exposition/exposition'

import serviceTopBg from '../../assets/img/tec.jpg'
import { Fade } from 'react-reveal';
import axios from 'axios'

import '../../assets/scss/exposition.scss'
import'../../App.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Loading } from '../../helpers/Provider'

function Services({ classes , nb }) {

    let settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: nb,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
        
         speed:500
    }


    const {loading,setLoading}=useContext(Loading)


    const [data, setData] = useState([])
    useEffect(() => {

        axios.get("http://localhost:3001/exposition")
            .then(res => {

                setData(res.data)
                setLoading(true)
            }
            )
            .catch(err => {
                throw (err)
            })

    }, [])


    return (
        <div className={`service-area-wrapper ${classes}`} style={{ paddingBottom: '3%' }}>
            <div className="service-area-top" style={{ backgroundImage: `url("${serviceTopBg}")` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 m-auto text-center">
                            <SectionTitle variant="light" heading="<span style='color:#2EA3DD;'>Exposition</span>" />
                        </div>
                    </div>
                </div>
            </div>
<br/>
            <div className="service-content-area">
                <div className="container" style={{width:"90%"}}>
                    <Fade big>
                        <Slider {...settings}>

                            {
                                data.map(service => (
                                    <div className="card-wrapper1" key={service._id}>
                                        <div className="card1">
                                            <div className="card-image1">
                                                <img src={service.image} />
                                            </div>
   
                                            <div className="details1">
                                                <h2>{service.nom} <span className="job-title"></span></h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>

                    </Fade>
                </div>
            </div>
            
        </div>
    );
}

export default Services;