import React ,{useEffect,useState} from 'react';
import FunfactItem from "./funfactItem";

import funfactbg from '../../assets/img/tec.jpg'

import axios from 'axios'


function Funfact() {

    const [count, setCount] = useState([])

    useEffect(() => {

        axios.get("http://localhost:3001/count")
            .then(res => {
                console.log(res.data)
                setCount(res.data)
               
            }
            )
            .catch(err => {
                throw (err)
            })
       
    }, [])
    return (
        <div className="fun-fact-area sm-top parallax" style={{backgroundImage: `url(${funfactbg})`}}>
            <div >
                <div className="container" >
                       
                            {/* <FunfactItem id={1} before={"+"} after={""} counterNumber={count.countEvent} counterText="Participants" /> */}
                            <FunfactItem id={1} before={"+"} after={""} counterNumber={count.countHackathon} counterText="Equipes" />
                            {/* <FunfactItem id={3} before={"+"} after={""} counterNumber ={count.countExposition} counterText="Stand" />
                            <FunfactItem id={4} before={""} after={""} counterNumber="5" counterText="Intervenants" /> */}
                    
                </div>
            </div>
        </div>
    );
}

export default Funfact;