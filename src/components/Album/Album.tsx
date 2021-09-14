import React from "react";

import './Album.css';


interface AlbumProps {
    name: string;
    artist: string;
    url: string;
}

export const Album: React.FC<AlbumProps>  = (props) =>{
    return <div className ="Album">
        <img className ="Album__img" src={props.url}></img>
        <div className ="Album__container">
          <h1 className ="Album__h1">{props.name}</h1>  
          <h2 className ="Album__h2">"Album"{props.artist}</h2>
        </div>
    </div>
}