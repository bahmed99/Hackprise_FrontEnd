import React, { useState} from 'react'
import { Container } from 'react-bootstrap'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Animation from '../Animation'
import {Link} from 'react-scroll'
import {Link as RouterLink} from "react-router-dom";
export default function Navbar(props) {

    
    const [visible, setVisible] = useState([false,false]);
    const showDrawer = () => {
        setVisible([true,true]);
    };
    
    return (
        <>
            <div className='bar' style={{backgroundColor:props.y,display: visible[1]&&!props.screen? 'none' : ''}}>
            <Link to="accueil" spy={true} smooth={true}><img style={{cursor:'pointer'}} src={require("../../assets/img/logo/whie.png")} className='logo'/></Link>
                <Container >
                    <ul className="list" style={{display: props.screen? '' : 'none'}}>
                        <li className="list-e"><Link activeClass="active" to="accueil" spy={true} smooth={true}>Accueil</Link></li>
                        <li className="list-e"><Link activeClass="active" to="apropos" spy={true} smooth={true}>À propos</Link></li>
                        <li className="list-e"><Link activeClass="active" to="partenaires" spy={true} smooth={true}>Partenaires</Link></li>
                        <li className="list-e"><Link activeClass="active" to="programme" spy={true} smooth={true}>Programme</Link></li>
                        <li className="list-e"><Link activeClass="active" to="conferenciers" spy={true} smooth={true}>Conférenciers</Link></li>
                        <li className="list-e"><Link activeClass="active" to="sponsors" spy={true} smooth={true}>Sponsors</Link></li>
                        <li className="list-e"><RouterLink to="/register" style={{color:'white'}}>S'inscrire</RouterLink></li>
                    </ul>
                </Container>
                
                <button onClick={showDrawer} className='btn-menu' style={{fontSize: '30px', color:"white", position:'absolute',right:'10px',top:'10%',display: props.screen? 'none' : ''}}><i  style={{height: '180%'}}  className="fa fa-bars"></i></button>
            </div>
            
             
                   <Animation   
                        type={visible[0]? 'fadeInRight':'fadeOutRight'}
                        duration={0.5}
                        obj={<ClickAwayListener onClickAway={(event) => {if(event.path[0].className!=='fa fa-bars'){setVisible([false,false]);setTimeout(()=>setVisible([false,false]) ,250);}}}>
                        <div className='mobile-menu' style={{display: visible[1]&&!props.screen? '' : 'none',marginLeft:(100-props.scale)+'%',width:props.scale+'%'}}>
                            <button onClick={() => {setVisible([false,true]);setTimeout(()=>setVisible([false,false]) ,250);}}style={{fontSize: '30px', color:"white", position:'absolute',right:'10px'}}> <i className="fa fa-times"></i></button>
                            <ul className="list-m" >
                                <li className="list-e-m"><Link activeClass="active" to="accueil" spy={true} smooth={true}>Accueil</Link></li>
                                <li className="list-e-m"><Link activeClass="active" to="apropos" spy={true} smooth={true}>À propos</Link></li>
                                <li className="list-e-m"><Link activeClass="active" to="partenaires" spy={true} smooth={true}>Partenaires</Link></li>
                                <li className="list-e-m"><Link activeClass="active" to="programme" spy={true} smooth={true}>Programme</Link></li>
                                <li className="list-e-m"><Link activeClass="active" to="conferenciers" spy={true} smooth={true}>Conférenciers</Link></li>
                                <li className="list-e-m"><Link activeClass="active" to="sponsors" spy={true} smooth={true}>Sponsors</Link></li>
                                <li className="list-e-m"><RouterLink to="/register" style={{color:'white'}}>S'inscrire</RouterLink></li>
                            </ul>
                        </div>
                        </ClickAwayListener>}/>
                    
            
            
        </>
    )
}
