import React from 'react';
import {Link} from "react-router-dom";
import deadline from '../assets/img/d.gif'

const Expiration = () => {
    return (
        <div style={styles}>
            <div>
                <img src={deadline} alt="expired"/>
                <Link to="/" className={'btn-brand'} style={{display: 'inline-Block', marginTop: 30}}>Go Back
                    Home</Link>
            </div>
        </div>
    );
};

const styles = {
    maxWidth: 850,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: 30
};

export default Expiration;