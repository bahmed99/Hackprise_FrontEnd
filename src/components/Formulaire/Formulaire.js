import React,{useState} from 'react'
import Hackathon from './Hackathon'
import Event from './Event'

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
            <div style={{display:displayChoice}}>
                <button onClick={DisplayHack}>Participer au HackAthon</button>
                <button onClick={DisplayEvent}>Participer au eventment</button>
            </div>
            
        </div>
    )
}
