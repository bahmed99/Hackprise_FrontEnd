import React, { useState } from 'react'
import HackathonSTB from './STB/index'
import HackathonINFOR from './Infor/Hackathon.js'


import { Reveal } from 'react-reveal';

export default function Formulaire({ long, btn }) {

    const [displayInfor, setDisplayInfor] = useState(false)
    const [displayStb, setDisplayStb] = useState(false)
    const [displayChoice, setDisplayChoice] = useState("flex")

    function DisplayInfor() {
        setDisplayChoice('none')
        setDisplayInfor(true);

    }
    function DisplayStb() {
        setDisplayChoice('none')
        setDisplayStb(true);

    }
    if (displayInfor) {
        return <HackathonINFOR long={long} />
    }
    if (displayStb) {
        
        return <HackathonSTB long={long} />
    }

    return (
        <div >
            {!btn ? <div style={{ display: displayChoice, marginTop: "50px" }}>
                <Reveal left>
                    <button onClick={DisplayInfor}  >
                    
                    <img src={require("../../assets/img/partenaires/infor.jpg").default} width="70%" alt="infor"/>
                    </button>
                </Reveal>
                <Reveal right>
                    <button onClick={DisplayStb}  style={{ marginLeft: "10px"}}>
                    <img src={require("../../assets/img/partenaires/stb.jpg").default}  width="70%" alt="stb"/>
                        
                    </button>
                </Reveal>
            </div> :
                <div style={{ display: displayChoice, marginTop: "50px" }}>
                    <Reveal left>
                    <button onClick={DisplayInfor}  >
                    
                    <img src={require("../../assets/img/partenaires/infor.jpg").default} width="70%" alt="infor"/>
                    </button>
                </Reveal>
                    <Reveal right>
                    <button onClick={DisplayStb}  style={{ marginLeft: "10px"}}>
                    <img src={require("../../assets/img/partenaires/stb.jpg").default}  width="70%" alt="stb"/>
                        
                    </button>
                </Reveal>
                </div>


            }
<br/>
        </div>
    )
}
