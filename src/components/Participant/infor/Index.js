import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import axios from 'axios'

function Index() {
    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
    axios.get(`http://localhost:3001/participants/Infor/${id}`)
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
    <div style={{ textAlign: "center",display:"flex",justifyContent:"center",alignItems: "center"}}>
       <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{data.NomEquipe}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Chef d'équipe</Card.Subtitle>
                    <Card.Text>
                        {data.nom}
                    </Card.Text>
                    <Card.Text>
                        {data.email}
                    </Card.Text>
                    <Card.Text>
                        {data.tel}
                    </Card.Text>
                    <Card.Text>
                        {data.profession}
                    </Card.Text>
                    <Card.Text>
                        {data.Etablissement}
                    </Card.Text>
                    <hr />
                    <Card.Text>
                        {data.nom1}
                    </Card.Text>
                    <Card.Text>
                        {data.email1}
                    </Card.Text>
                    <Card.Text>
                        {data.tel1}
                    </Card.Text>
                    <Card.Text>
                        {data.profession1}
                    </Card.Text>
                    <Card.Text>
                        {data.Etablissement1}
                    </Card.Text>
                   
                    
                </Card.Body>
            </Card>
    </div>
);
}

export default Index
