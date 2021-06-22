import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Item from '../Item'



function Stb() {
    const [data, setData] = useState([])
    useEffect(() => {

        axios.get("http://localhost:3001/participants/Stb")
            .then(res => {
                setData(res.data)
                console.log(res.data)
            }
            )
            .catch(err => {
                throw (err)
            })

    }, [])
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridRowGap: "50px", marginTop: "15px", marginLeft: "15px"
        }}>
            {data.map((element) => (
                <div key={element._id}>
                    <Item element={element} hack={"stb"} />
                </div>
            ))}
        </div>
    )
}

export default Stb
