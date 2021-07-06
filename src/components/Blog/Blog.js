import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Footer from '../Footer';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share"
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share"
import { FaShareAlt } from 'react-icons/fa';
import "../../assets/css/Blog.css"
import { Helmet } from "react-helmet";
// import FaTwitter from "react-icons/lib/fa/twitter";
// import FaFacebook from "react-icons/lib/fa/facebook";
// import FaLinkedin from "react-icons/lib/fa/linkedin";
import MetaTags from 'react-meta-tags';
function Blog() {


    const { id } = useParams();

    const [blog, setBlog] = useState({})
    const [date, setDate] = useState("")



    useEffect(() => {


        axios.get(`https://back.hackprise.com/blogs/${id}`).then((res) => {

            setBlog(res.data)
            setDate(res.data.createdAt.substring(8, 10) + '-' + res.data.createdAt.substring(5, 7) + "-" + res.data.createdAt.substring(0, 4))
        }).catch(console.log('error'))
    }, [])



    return (
        <div className="containerPost">
            <br /> <br /><br />
            <Helmet>
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.txt} />
                <meta property="og:image" content={`https://hackprise.com/uploads/${blog.image}`} /></Helmet>
                <meta property="og:url"   content={`https://hackprise.com/article/${blog._id}`} />
            <div className="container  post">

                <div className="col-lg-12">
                    <article>
                        <header className="mb-4">
                            <br /><br />
                            <h1 className="fw-bolder mb-1">{blog.title}</h1>

                            <div className="containerIcons">
                                <i className="fa fa-user haver"></i> by <strong className="haver">{blog.writer} /</strong>

                                <i className="fa fa-clock-o haver"></i> {date} <strong>/</strong>

                                <span className="share haver"><FaShareAlt />Share</span>

                                <FacebookShareButton url={`https://hackprise.com/article/${blog._id}`} quote={blog.title}>
                                    <FacebookIcon logoFillColor="white" round={true} size={30} className="socialicon haver1"></FacebookIcon>
                                </FacebookShareButton>
                                <LinkedinShareButton url={`https://hackprise.com/article/${blog._id}`} quote={blog.title}>
                                    <LinkedinIcon logoFillColor="white" round={true} size={30} className="socialicon haver1"> </LinkedinIcon>
                                </LinkedinShareButton>
                                <TwitterShareButton url={`https://hackprise.com/article/${blog._id}`} quote={blog.title} >
                                    <TwitterIcon logoFillColor="white" round={true} size={30} className="socialicon haver1"> </TwitterIcon>
                                </TwitterShareButton>
                            </div>



                        </header>
                        <figure className="mb-4"><img className="img-fluid rounded" src={`/uploads/${blog.image}`} alt="..." width="100%" /></figure>
                        <section className="mb-5">
                            <div dangerouslySetInnerHTML={{ __html: blog.content }}>

                            </div>
                        </section>
                    </article>
                </div>
                <br />
            </div>




            <br /><br /><br /><br />
            <Footer />
        </div >
    )
}

export default Blog
