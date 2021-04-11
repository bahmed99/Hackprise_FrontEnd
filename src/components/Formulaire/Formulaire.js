import React,{useState} from 'react'
import Hackathon from './Hackathon/Hackathon'
import Event from './Event/Event'
import './Style.css'
import { Reveal } from 'react-reveal';

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
            <div style={{display:displayChoice ,textAlign:"center" ,marginTop:"120px"}}>
                <Reveal left>
                <button onClick={DisplayHack} className="btn btn-primary" style={{backgroundColor:"#2ea3dd"}}>Au Hackathon</button>
                </Reveal>
                <Reveal right>
                <button onClick={DisplayEvent} className="btn btn-primary" style={{marginLeft:"50px" ,backgroundColor:"#2ea3dd"}}>Au Événement</button>
                </Reveal>
            </div>
            
        </div>
    )
}
