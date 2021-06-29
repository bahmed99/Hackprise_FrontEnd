import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Footer from '../Footer';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share"
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share"
import { FaShareAlt } from 'react-icons/fa';

import "../../assets/css/Blog.css"



function Blog() {


    const { id } = useParams();

    const [blog, setBlog] = useState({})
    const [date, setDate] = useState("")



    useEffect(() => {

        axios.get(`http://localhost:3001/blogs/${id}`).then((res) => {
            console.log(res.data)
            setBlog(res.data)
            setDate(res.data.createdAt.substring(8, 10) + '-' + res.data.createdAt.substring(5, 7) + "-" + res.data.createdAt.substring(0, 4))
        }).catch(console.log('error'))
    }, [])



    return (
        <div className="containerPost">
            <br /> <br /><br />

            {<div className="container  post">

                <div className="col-lg-12">
                    <article>
                        <header className="mb-4">
                            <br /><br />
                            <h1 className="fw-bolder mb-1">{blog.title}</h1>

                            <div className="containerIcons">
                                <i className="fa fa-user haver"></i> by <strong className="haver">{blog.writer} /</strong>

                                <i className="fa fa-clock-o haver"></i> {date} <strong>/</strong>
                                
                                    <span className="share haver"><FaShareAlt />Share </span>
                                    <FacebookShareButton url={`http://localhost:3001/blogs/${blog._id}`}>
                                        <FacebookIcon logoFillColor="white" round={true} size={30} className="socialicon"></FacebookIcon>
                                    </FacebookShareButton>
                                    <LinkedinShareButton url={`http://localhost:3001/blogs/${blog._id}`}>
                                        <LinkedinIcon logoFillColor="white" round={true} size={30} className="socialicon"> </LinkedinIcon>
                                    </LinkedinShareButton>
                                    <TwitterShareButton url={`http://localhost:3001/blogs/${blog._id}`}>
                                        <TwitterIcon logoFillColor="white" round={true} size={30} className="socialicon"> </TwitterIcon>
                                    </TwitterShareButton>
                                </div>
 


                        </header>
                        <figure className="mb-4"><img className="img-fluid rounded" src={`/uploads/${blog.image}`} alt="..." width="100%" /></figure>
                        <section className="mb-5">
                            <p className="fs-5 mb-4">{blog.content}</p>
                        </section>
                    </article>
                </div>


                <br />


            </div>
                // <div class="section" >
                //     <div class="row" style={{transform: "none"}}>
                //         <div class="col-md-8 col-lg-9">
                //             <div id="site-content" class="site-content">
                //                 <div class="row">
                //                     <div class="col">
                //                         <div class="left-content">
                //                             <div class="details-news">
                //                             <div class="post">
                //                                 <div class="entry-header">
                //                                     <div class="entry-thumbnail">
                //                                         <img class="img-fluid" src={`/uploads/${blog.image}`} alt="" />
                //                                     </div>
                //                                 </div>
                //                                 <div class="post-content">
                //                                     <div class="entry-meta">
                //                                         <ul class="list-inline">
                //                                             <li class="posted-by"><i class="fa fa-user"></i> by <strong>{blog.writer}</strong></li>
                //                                             <li class="publish-date"><i class="fa fa-clock-o"></i> {blog.createdAt} </li>

                //                                         </ul>
                //                                     </div>
                //                                     <h2 class="entry-title">
                //                                         {blog.title}
                //                                     </h2>
                //                                     <div class="entry-content">
                //                                         <p>{blog.content}</p>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                //     </div>

            }
            {/* <div className="textContainer1">
                <h1> {blog.title}</h1>
                <div className="text-muted fst-italic mb-2">Posté le {blog.createdAt}</div>
                <div className="logoContainer1">
                    <img src={`/uploads/${blog.image}`}  alt="blog" />
                </div>
                <p id="t">{blog.content}.</p>
                
            </div> */}
            <br /><br /><br /><br />
            <Footer />
        </div >
    )
}

export default Blog
