import React, { useState } from 'react'
import { Reveal } from 'react-reveal';
import Stb from "./Stb/Stb.js"
import Infor from "./Infor/Index.js"
import { useHistory } from 'react-router';

function Choix() {

    const history = useHistory();


    
    function DisplayStb() {
       history.push("/eje/stb")
    
    }
    function DisplayInfor() {
        history.push("/eje/infor")
    
    }
    // if (displayStb) {
    //     return <Stb />
    // }
    // if (displayInfor) {
    //     return <Infor />
    // }



    return (
        <div style={{  textAlign: "center", marginTop: "120px" }}>
                <Reveal left>
                    <button onClick={DisplayStb} className="btn btn-primary" style={{ backgroundColor: "#2ea3dd" }}>STB</button>
                </Reveal>
                <Reveal right>
                    <button onClick={DisplayInfor} className="btn btn-primary" style={{ marginLeft: "50px", backgroundColor: "#2ea3dd" }}>INFOR</button>
                </Reveal>
        </div>
    )
}

export default Choix
