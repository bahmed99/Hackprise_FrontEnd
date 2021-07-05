import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Item from '../Item'

function Infor({ pres }) {

    const [data, setData] = useState([])
    useEffect(() => {

        axios.get(`https://back.hackprise.com/participants/Infor`)
            .then(res => {

                setData(res.data)
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
                    <Item element={element} hack={"infor"} />
                </div>
            ))}
        </div>
    )
}

export default Infor
