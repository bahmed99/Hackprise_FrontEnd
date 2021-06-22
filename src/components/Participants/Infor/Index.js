import React from 'react'
import { Reveal } from 'react-reveal';
import { useHistory } from 'react-router';


function Index() {

    const history = useHistory();


    
    function DisplayEnLigne() {
        
    history.push('/eje/infor/enLigne')
    }
    function DisplayEnPresentiel() {
        history.push('/eje/infor/enPresentiel')
    
    }
    


    return (
        <div style={{  textAlign: "center", marginTop: "120px" }}>
                <Reveal left>
                    <button onClick={DisplayEnLigne} className="btn btn-primary" style={{ backgroundColor: "#2ea3dd" }}>En ligne</button>
                </Reveal>
                <Reveal right>
                    <button onClick={DisplayEnPresentiel} className="btn btn-primary" style={{ marginLeft: "50px", backgroundColor: "#2ea3dd" }}>En Présentiel</button>
                </Reveal>
        </div>
    )
}

export default Index

