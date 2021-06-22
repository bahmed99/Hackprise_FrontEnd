import React, { useState, useEffect } from 'react'
import BlogCard from './Card'
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import "./Blogs.css"
import Axios from "axios"


const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "5vw",
        paddingRight: "5vw"
    }
})

function Blogs() {
    const [blogsList, setBlogsList] = useState([])
    useEffect(() => {
        let unmounted = false
        if (!unmounted) {
            Axios.get('http://localhost:5000/blogs').then(
                (data) => {
                    console.log(data)
                    setBlogsList(data.data)
                }
            )
        }
        return () => { unmounted = true }
    }, [])

    const classes = useStyles();
    return (
        <div>
            <div className="Header BlogsHeader" >
                <div className="HeaderOverlay">
                    <div className="titleWrapper">
                        <h1 contenteditable data-heading="Our Blogs" className="titles">Our Blogs</h1>
                    </div>
                </div>
            </div>
            <div className="BlogBody">
                <Grid container spacing={5} className={classes.gridContainer} >
                    {blogsList.map((blog, key) =>
                        <Grid item xs={12} sm={6} md={4}>
                            <BlogCard title={blog.title} content={blog.content} image={blog.image} id={blog._id} key={key} />
                        </Grid>
                    )}
                    <Grid item xs={12} sm={6} md={4}>
                    </Grid>


                </Grid>

            </div>
        </div>
    )
}
export default Blogs