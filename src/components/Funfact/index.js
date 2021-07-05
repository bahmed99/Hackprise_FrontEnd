import React ,{useEffect,useState} from 'react';
import FunfactItem from "./funfactItem";

import funfactbg from '../../assets/img/tec.jpg'

import axios from 'axios'


function Funfact() {

    const [count, setCount] = useState([])

    useEffect(() => {

        axios.get("https://back.hackprise.com/count")
            .then(res => {
               
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
                       
                <div className="row mtn-40">
                            <FunfactItem id={1} before={"+"} after={""} counterNumber={count.infor} counterText="Equipes Infor" />
                            <FunfactItem id={2} before={"+"} after={""} counterNumber={count.stb} counterText="Equipes STB" />
                         </div>  
                </div>
            </div>
        </div>
    );
}

export default Funfact;