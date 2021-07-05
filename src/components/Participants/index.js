import React from 'react'
import { Reveal } from 'react-reveal';

import { Link } from "react-router-dom";


function Choix() {


    return (
        <div style={{  textAlign: "center", marginTop: "120px" , display:"flex" ,justifyContent:"center"}}>
                <Reveal left>
                     <Link to={`/2021eje2021/99stb99`} className="btn-outline" >STB</Link>
                </Reveal>
                <Reveal right>
                    <Link to={`/2021eje2021/55infor55`} className="btn-outline" style={{ marginLeft: "50px"}}>Infor</Link>
                </Reveal>
        </div>
    )
}

export default Choix
