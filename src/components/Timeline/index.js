import React from 'react';
import '../../assets/css/timeline.css'

const TimelineWrap = ({icon,children,title}) => {
    return (
        <div className={'cd-timeline-wrap'}>
            
            <span className="timeline-icon"><h5 style={{position:'absolute',top:"-60px",textAlign:'center'}} className='timeline-title'>{title}</h5><img width='60%' height='' className={'icon'} src={require(`../../assets/img/icons/${icon}`).default} alt="" /></span>
            <div className={'cd-timeline'}>
                {children}
            </div>
        </div>
    );
};

export default TimelineWrap;