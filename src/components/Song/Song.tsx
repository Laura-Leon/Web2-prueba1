import React from "react";

import './Song.css';


interface SongProps {
    name: string;
    artist: string;
    url: string;
}

export const Song: React.FC<SongProps>  = (props) =>{
    return <div className ="Song">
        <img className ="Song__img" src={props.url}></img>
        <div className ="Song__container">
          <h1 className ="Song__h1">{props.name}</h1>  
          <h2 className ="Song__h2">{props.artist}</h2>
        </div>
    </div>
}