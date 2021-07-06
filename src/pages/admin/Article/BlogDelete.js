
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';




function BlogDelete() {

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

    function Delete(e) {
        let id =e.target.id
        axios.delete(`https://back.hackprise.com/blogs/${id}`)
            .then(res => {
               
            })

        window.location.reload();
    }


    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridRowGap: "50px", marginTop: "15px", marginLeft: "15px"
        }}>
            {data.map(blog => (
                <div style={{ width: "18rem", height: "" }} className="card" >
                    <img style={{ width: "600px", height: "300px" }} className="card-img-top" src={`/uploads/${blog.image}`} alt="" />
                    <div className="card-body" style={{ textAlign: "center" }}>
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.txt.substring(0, 30)}...</p>
                        <button onClick={Delete} id={blog._id} className="btn btn-primary">Supprimer</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogDelete
