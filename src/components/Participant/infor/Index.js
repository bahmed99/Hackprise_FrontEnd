import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import axios from 'axios'

function Index() {
    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
    axios.get(`https://back.hackprise.com/participants/Infor/${id}`)
        .then(res => {
            setData(res.data)
           
        }
        )
        .catch(err => {
            throw (err)
        })

}, [])

return (
    <div style={{ textAlign: "center",display:"flex",justifyContent:"center",alignItems: "center"}}>
       <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title><strong>Nom équipe:  </strong>{data.NomEquipe}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Chef d'équipe</Card.Subtitle>
                    <Card.Text>
                    <strong>Nom:  </strong>   {data.nom}
                    </Card.Text>
                    <Card.Text>
                    <strong>Email:  </strong>   {data.email}
                    </Card.Text>
                    <Card.Text>
                    <strong>Phone:  </strong>    {data.tel}
                    </Card.Text>
                    <Card.Text>
                    <strong>Profession:  </strong>   {data.profession}
                    </Card.Text>
                    <Card.Text>
                    <strong>Etablissement:  </strong>   {data.Etablissement}
                    </Card.Text>
                    <Card.Text>
                    <strong>niveau:  </strong> {data.niveau}
                    </Card.Text>
                    
                    <Card.Text>
                       <strong>discord:  </strong> {data.d}
                    </Card.Text>
                    <hr />
                    <Card.Text>
                    <strong>Nom:  </strong>    {data.nom1}
                    </Card.Text>
                    <Card.Text>
                    <strong>Email:  </strong>    {data.email1}
                    </Card.Text>
                    <Card.Text>
                    <strong>Phone:  </strong>    {data.tel1}
                    </Card.Text>
                    <Card.Text>
                    <strong>Profession:  </strong>    {data.profession1}
                    </Card.Text>
                    <Card.Text>
                    <strong>Etablissement:  </strong>   {data.Etablissement1}
                    </Card.Text>
                    <Card.Text>
                    <strong>niveau:  </strong>  {data.niveau1}
                    </Card.Text>
                    <Card.Text>
                    <strong>discord:  </strong>   {data.discord1}
                    </Card.Text>
                   
                    
                </Card.Body>
            </Card>
    </div>
);
}

export default Index
