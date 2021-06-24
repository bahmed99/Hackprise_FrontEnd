import React from 'react';
import ContactInfo from "./ContactInfo";
import Formulaire from '../Formulaire/Formulaire.js';

const ContactPage = ({long , btn }) => {
    return (
        <div className={'contact-page-area-wrapper sp-y'} >
            <div className="container">
                <div className="contact-content-wrap">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-form-area contact-method">
                                <h3>Inscrivez vous</h3>
                                    {/* <Hackathon long={long} btn={btn} /> */}
                                    <Formulaire long={long} btn={btn} />
                               
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="contact-information contact-method">
                                <div className="contact-info-con">
                                    <ContactInfo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;