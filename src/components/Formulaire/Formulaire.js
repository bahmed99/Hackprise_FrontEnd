import React,{useState} from 'react'
import Hackathon from './Hackathon'
import Event from './Event'
import './Style.css'

export default function Formulaire() {

    const [displayHack, setDisplayHack] = useState(false)
    const [displayEvent, setDisplayEvent] = useState(false)
    const [displayChoice, setDisplayChoice] = useState()

function DisplayHack() {
    setDisplayChoice('none')
    setDisplayHack(true);

}
function DisplayEvent() {
    setDisplayChoice('none')
    setDisplayEvent(true);

}
if(displayHack) {
    return <Hackathon /> ;
}
if(displayEvent){
    return <Event />
}

    return (
        <div>
            <div style={{display:displayChoice ,textAlign:"center" ,marginTop:"100px"}}>
                <button onClick={DisplayHack} className="btn btn-primary" style={{backgroundColor:"#2ea3dd"}}>Au Hackathon</button>
                <button onClick={DisplayEvent} className="btn btn-primary" style={{marginLeft:"50px" ,backgroundColor:"#2ea3dd"}}>Au Evenement</button>
            </div>
            
        </div>
    )
}
