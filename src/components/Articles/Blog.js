import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import "./Blog.css"


export default function Blog() {
    const  {id}  = useParams();
 
    const [blog, setBlog] = useState({})

    useEffect(() => {
        
        axios.get(`http://localhost:3001/blogs/${id}`).then((res) => {
            console.log(res.data)
            setBlog(res.data)
        }).catch(console.log('error'))
    },[])
 

    return (
        <div className="blog">
            <div className="blogImage">
                <img src={`/uploads/${blog.image}`} alt='' />
            </div>
            <h1 className="blogTitle">{blog.title}</h1>
            <p className="blogContent">{blog.content}</p>
            <div className="blogWriter"><span style={{ fontWeight: "bold" }}>écrit par: </span>{blog.writer}</div>
        </div>
    )
}
