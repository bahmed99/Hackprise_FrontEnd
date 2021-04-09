import React from 'react'
import { Reveal } from 'react-reveal';
import '../../assets/css/about.css'



export default function index() {
    return (
        <Reveal left>
            <div className="about-section">
                <div className="inner-container" style={{ textAlign: 'center' }}>
                    <Reveal top>
                        <h1 >A propos de l'évènement</h1>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>

                    </Reveal>
                </div>

            </div>
        </Reveal>
    )
}
