import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';


const ContactInfo = ({address}) => {
    return (
        <Fragment>
            <div className="widget-item m-0">
                <Link to="/"><img src={require('../../assets/img/logo/logo.png').default} width="100%" alt=""/></Link>
            </div>
        </Fragment>
    );
};

export default ContactInfo;