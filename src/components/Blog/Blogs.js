import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../Utilities/SectionTitle'
import data from '../../data/Exposition/exposition'

import serviceTopBg from '../../assets/img/tec.jpg'
import { Fade } from 'react-reveal';
import axios from 'axios'

import '../../assets/scss/exposition.scss'
import '../../App.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Services({ classes, nb }) {

    const settings = {
        slidesToShow: 3,
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





    const [data, setData] = useState([])
    useEffect(() => {

        axios.get("http://localhost:3001/blogs")
            .then(res => {

                setData(res.data)
                console.log(res.data)
            }
            )
            .catch(err => {
                throw (err)
            })

    }, [])
    function Send() {
        alert("grbrb")
    }

    return (
        <div className={`service-area-wrapper ${classes}`} style={{ paddingBottom: '3%' }}>
            <div className="service-area-top" style={{ backgroundImage: `url("${serviceTopBg}")` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 m-auto text-center">
                            <SectionTitle variant="light" heading="<span style='color:#2EA3DD;'>Articles</span>" />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="service-content-area">
                <div className="container" style={{ width: "90%" }}>
                    <Fade big>
                        <Slider {...settings}>

                            {
                                data.map(blog => (
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img  style={{width:"700px",height:"400px"}} className="card-img-top" src={`/uploads/${blog.image}`} alt="" />
                                        <div className="card-body" style={{ textAlign: "center" }}>
                                            <h5 className="card-title">{blog.title}</h5>
                                            <p className="card-text">{blog.content.substring(0,10)}...</p>
                                            <a href={`/article/${blog._id}`} class="btn btn-primary">Read more</a>
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