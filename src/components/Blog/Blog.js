import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Footer from '../Footer';





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
        <>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#1f212d"}}>
            <div className="container" >
                <a className="navbar-brand"  href="" style={{color:"white"}}>Article</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="/" style={{color:"white"}}>Accueil</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/register"  style={{color:"white"}}>Inscription</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8">
                    <article>
                        <header className="mb-4">
                            <h1 className="fw-bolder mb-1">{blog.title}</h1>
                            <div className="text-muted fst-italic mb-2">Posté en {blog.createdAt}</div>
                           
                        </header>
                        <figure className="mb-4"><img className="img-fluid rounded" src={`/uploads/${blog.image}`} alt="..." /></figure>
                        <section className="mb-5">
                            <p className="fs-5 mb-4">{blog.content}.</p>
                        </section>
                    </article>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Blog
