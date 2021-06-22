import React, { useState ,useEffect} from 'react'
import { Card, Button } from 'react-bootstrap';
import axios from 'axios'

function Item({ element, hack }) {

    const [color, setColor] = useState("")

    useEffect(() => {
        
        if(element.done){setColor("green")}
        else{setColor("red")}

    }, [element])



    function Done(hack, id) {

        axios.put(`http://localhost:3001/participants/${hack}/${id}`,
            {done:true
            }).then(res => {
                console.log(res);
                console.log(res.data)
            })

        window.location.reload();
    }

    function NotDone(hack, id) {

        axios.put(`http://localhost:3001/participants/${hack}/not/${id}`,
            {done:false
            }).then(res => {
                console.log(res);
                console.log(res.data)
            })

        window.location.reload();
    }

    return (
        <div >
            <Card style={{ width: '20rem' ,borderColor:color}}>
                <Card.Body>
                    <Card.Title>{element.NomEquipe}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Chef d'équipe</Card.Subtitle>
                    <Card.Text>
                        {element.nom}
                    </Card.Text>
                    <Card.Text>
                        {element.email}
                    </Card.Text>
                    <Card.Link href={`/eje/${hack}/${element._id}`}>Informations</Card.Link>
                    <Button type="submit" style={{marginLeft:"16px"}} onClick={()=>{Done(hack,element._id)}} > done</Button>
                    <Button type="submit" style={{marginLeft:"16px"}} onClick={()=>{NotDone(hack,element._id)}} > Not Done</Button>
                </Card.Body>
            </Card>
          
        </div>

    )
}

export default Item
