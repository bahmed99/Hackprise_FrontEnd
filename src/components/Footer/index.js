import React from 'react';
import Text from "../Utilities/Text";
import Widget from "../Utilities/Widget";
import List from "../Utilities/List";
import LI from "../Utilities/List/Item";
import {Link} from "react-router-dom";
import { ExternalLink } from 'react-external-link';

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row mtn-40">
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Link to="/">
                                    <img src={require("../../assets/img/logo/f.png").default} alt="Logo"/>
                                </Link>



                                <Text classes="copyright-txt">
                                    &copy; {new Date().getFullYear()} ENSI Junior Entreprise. All Rights Reserved.
                                </Text>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Nos réseaux">
                            <List classes="widget-list">
                                <LI><ExternalLink href="https://www.facebook.com/ENSI.Junior.Entreprise" target={'_blank'}>Facebook</ExternalLink></LI>
                                <LI><ExternalLink href="https://www.instagram.com/ensijunior/" target={'_blank'}>Instagram</ExternalLink></LI>
                                <LI><ExternalLink href="https://www.linkedin.com/company/ensi-junior-entreprise/?originalSubdomain=tn" target={'_blank'}>LinkedIn</ExternalLink></LI>
                                
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Widget title="Nous contacter">
                            <address>
                                Campus Universitaire de La Manouba, 2010, Tunis, Tunisie <br/>
                                (+216) 26800064 | (+216) 20191203
                            </address>
                        </Widget>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;