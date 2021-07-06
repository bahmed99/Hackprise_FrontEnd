import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../Utilities/SectionTitle'
import data from '../../data/Exposition/exposition'
import { Link } from "react-router-dom";
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
        slidesToShow: nb,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 500,
        className: ` testimonial-grid`,

    }





    const [data, setData] = useState([])
    useEffect(() => {

        axios.get("https://back.hackprise.com/blogs")
            .then(res => {

                setData(res.data)
               
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
                            <SectionTitle variant="light" heading="<span style='color:#2ea3dd;'>Articles</span>" />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="service-content-area">
                <div className="container " style={{ width: "90%" }}>
                    <Fade big>
                        <Slider {...settings}>

                            {
                                data.map(blog => (
                                    <div style={{ width: "18rem" }} className="card" >
                                        <img style={{ width: "500px", height: "250px" }} className="card-img-top" src={`/uploads/${blog.image}`} alt="" />
                                        <div className="card-body" style={{ textAlign: "center" }}>
                                            <h5 className="card-title">{blog.title}</h5>
                                            <p className="card-text">{blog.txt.substring(0, 30)}...</p>
                                            {/* <div className="card-text" dangerouslySetInnerHTML={{__html:blog.content.substring(50, 100)} }></div> */}
                                            {/* <a href={`/article/${blog._id}`} className="btn btn-primary" target="_blank" >Lire plus</a> */}
                                            <Link to={`/article/${blog._id}`} className="btn-outline" target="_blank">Lire plus</Link>
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