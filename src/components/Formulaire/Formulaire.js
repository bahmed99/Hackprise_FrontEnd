import React, { useState } from 'react'
import HackathonSTB from './STB/Hackathon.js'
import HackathonINFOR from './Infor/Hackathon.js'

import './Style.css'
import { Reveal } from 'react-reveal';

export default function Formulaire({ long, btn }) {

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
    if (displayHack) {
        return <HackathonINFOR long={long} />
    }
    if (displayEvent) {
        
        return <HackathonSTB long={long} />
    }

    return (
        <div>
            {!btn ? <div style={{ display: displayChoice, textAlign: "center", marginTop: "120px" }}>
                <Reveal left>
                    <button onClick={DisplayHack} className="btn btn-primary" style={{ backgroundColor: "#2ea3dd" }}>INFOR</button>
                </Reveal>
                <Reveal right>
                    <button onClick={DisplayEvent} className="btn btn-primary" style={{ marginLeft: "50px", backgroundColor: "#2ea3dd" }}>STB</button>
                </Reveal>
            </div> :
                <div style={{ display: displayChoice, textAlign: "center", marginTop: "50px" }}>
                    <Reveal left>
                        <button onClick={DisplayHack} className="btn btn-primary" style={{ backgroundColor: "#2ea3dd" }}>INFOR</button>
                    </Reveal>
                    <Reveal right>
                        <button onClick={DisplayEvent} className="btn btn-primary" style={{marginLeft: "10px", backgroundColor: "#2ea3dd" }}>STB</button>
                    </Reveal>
                </div>


            }

        </div>
    )
}
