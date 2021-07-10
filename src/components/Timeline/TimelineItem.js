import React from 'react';

const Timeline = (props) => {
    
    return (
        <div className="cd-timeline-block">
           {props.long? <div className="cd-timeline-img">
                <span className="dot"/>
            </div>:""}

            <div className="cd-timeline-content">
                <div className="cd-heading">
                    <p>{props.duration} | <span>{props.institute}</span></p>
                </div>
                <h5 className="cd-description">{props.comment}</h5>
            </div>
        </div>
    );
};
Timeline.defaultProps={
    long:true
}


export default Timeline;