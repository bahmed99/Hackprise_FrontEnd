import React from 'react'
import '../../assets/css/conference.css'
export default function item({ name, image, profession }) {
    return (

       
        
                <div class="profile-card">
                    <div class="profile-img">
                        <img src={require('../../assets/img/' + image).default} alt="Team Image"/>
                    </div>
                    <div class="profile-content">
                        <h2 class="title">{name}
                            <span>{profession}</span>
                        </h2>
                    </div>
                </div>
           
     
 
    )
}
