import React, {} from 'react';
import './Video.css'
import ReactDOM from "react-dom";

export default function Video (props){
    const handleClick=(e)=>{
        e.preventDefault();//prevents default action on click
        e.target.muted=!e.target.muted;
    }
    const handleScroll = (e) => {
        let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling
        if(next){
            next.scrollIntoView()
            e.target.muted = true
        }
    }
    return (
        <video  className='videos-styling' src={props.src} controls muted='muted'
                onClick={handleClick} onEnded={handleScroll}></video>
    );

}

