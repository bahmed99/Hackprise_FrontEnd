import React from 'react'
import { Reveal } from 'react-reveal';

import { Link } from "react-router-dom";

function Index() {

    
    


    return (
        <div style={{  textAlign: "center", marginTop: "120px" , display:"flex" ,justifyContent:"center"}}>
                <Reveal left>
                <Link to={`/eje/infor/enLigne`} className="btn-outline" >En Ligne</Link>
                </Reveal>
                <Reveal right>
                <Link to={`/eje/infor/enPresentiel`} className="btn-outline" style={{marginLeft:"10px"}} >En Présentiel</Link>                </Reveal>
        </div>
    )
}

export default Index

