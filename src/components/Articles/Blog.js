import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios"
import "./Blog.css"


export default function Blog() {
    let { blogId } = useParams();
    const [blog, setBlog] = useState({})
    useEffect(() => {
        console.log(blogId)
        Axios.get(`http://127.0.0.1:5000/blogs/${blogId}`).then((data) => {
            console.log(data)
            setBlog(data.data)
        }).catch(console.log('error'))
    })
    console.log(blog)

    return (
        <div className="blog">
            <div className="blogImage">
            <img src={`/uploads/${blog.image}`} />
            </div>
            <h1 className="blogTitle">{blog.title}</h1>
            <p className="blogContent">{blog.content}</p>
            <div className="blogWriter"><span style={{fontWeight:"bold"}}>écrit par: </span>{blog.writer}</div>
        </div>
    )
}
