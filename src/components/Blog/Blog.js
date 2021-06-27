import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Footer from '../Footer';


import "../../assets/css/Blog.css"


function Blog() {


    const  {id}  = useParams();
 
    const [blog, setBlog] = useState({})

    useEffect(() => {
        
        axios.get(`http://localhost:3001/blogs/${id}`).then((res) => {
            console.log(res.data)
            setBlog(res.data)
        }).catch(console.log('error'))
    },[])



    return (
        <div >
       
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8">
                    <article>
                        <header className="mb-4">
                            <h1 className="fw-bolder mb-1">{blog.title}</h1>
                            <div className="text-muted fst-italic mb-2">Posté le {blog.createdAt}</div>
                           
                        </header>
                        <figure className="mb-4"><img className="img-fluid rounded" src={`/uploads/${blog.image}`} alt="..." /></figure>
                        <section className="mb-5">
                            <p className="fs-5 mb-4">{blog.content}.</p>
                        </section>
                    </article>
                </div>
            </div>
        </div>

        {/* <div className="textContainer1">
                <h1> {blog.title}</h1>
                <div className="text-muted fst-italic mb-2">Posté le {blog.createdAt}</div>
                <div className="logoContainer1">
                    <img src={`/uploads/${blog.image}`}  alt="blog" />
                </div>
                <p id="t">{blog.content}.</p>
                
            </div> */}
        <Footer />
        </div>
    )
}

export default Blog
