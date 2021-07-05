import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import axios from 'axios'

function Index() {
    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://back.hackprise.com/participants/Stb/${id}`)
            .then(res => {
                setData(res.data)
               
            }
            )
            .catch(err => {
                throw (err)
            })

    }, [])

    return (
        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title><strong>Nom équipe:  </strong>{data.NomEquipe}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Chef d'équipe</Card.Subtitle>
                    <Card.Text>
                        <strong>Nom:  </strong>{data.nom}
                    </Card.Text>
                    <Card.Text>
                        <strong>Email:  </strong>   {data.email}
                    </Card.Text>
                    <Card.Text>
                        <strong>Tel:  </strong>    {data.tel}
                    </Card.Text>
                    <Card.Text>
                        <strong>Profession: </strong>  {data.profession}
                    </Card.Text>
                    <Card.Text>
                        <strong>Etablissement: </strong> {data.Etablissement}
                    </Card.Text>

                    <Card.Text>
                        <strong>Discord:  </strong>   {data.d}
                    </Card.Text>
                    <hr />
                    <Card.Text>
                        <strong>Nom:  </strong>    {data.nom1}
                    </Card.Text>
                    <Card.Text>
                        <strong>Email:  </strong>   {data.email1}
                    </Card.Text>
                    <Card.Text>
                        <strong>Tel:  </strong>    {data.tel1}
                    </Card.Text>
                    <Card.Text>
                        <strong>Profession:  </strong>     {data.profession1}
                    </Card.Text>
                    <Card.Text>
                        <strong>Etablissement:  </strong>    {data.Etablissement1}
                    </Card.Text>
                    <Card.Text>
                        <strong>Discord:  </strong>    {data.discord1}
                    </Card.Text>
                    <hr />
                    <Card.Text>
                        <strong>Nom:  </strong>   {data.nom2}
                    </Card.Text>
                    <Card.Text>
                        <strong>Email:  </strong>    {data.email2}
                    </Card.Text>
                    <Card.Text>
                        <strong>Tel:  </strong>    {data.tel2}
                    </Card.Text>
                    <Card.Text>
                        <strong>Profession:  </strong>   {data.profession2}
                    </Card.Text>
                    <Card.Text>
                        <strong>Etablissement:  </strong>     {data.Etablissement2}
                    </Card.Text>
                    <Card.Text>
                        <strong>Discord:  </strong>   {data.discord2}
                    </Card.Text>
                    <hr />
                    <Card.Text>
                        <strong>Nom:  </strong>   {data.nom3}
                    </Card.Text>
                    <Card.Text>
                        <strong>Email:  </strong>   {data.email3}
                    </Card.Text>
                    <Card.Text>
                        <strong>Tel:  </strong>    {data.tel3}
                    </Card.Text>
                    <Card.Text>
                        <strong>Profession:  </strong>    {data.profession3}
                    </Card.Text>
                    <Card.Text>
                        <strong>Etablissement:  </strong>    {data.Etablissement3}
                    </Card.Text>
                    <Card.Text>
                        <strong>Discord:  </strong>   {data.discord3}
                    </Card.Text>


                </Card.Body>
            </Card>
        </div>
    );
}

export default Index
