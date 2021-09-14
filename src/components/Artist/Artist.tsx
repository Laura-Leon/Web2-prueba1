import React from "react";

import './Artist.css';


interface ArtistProps {
    name: string;
    number: string;
    url: string;
}

export const Artist: React.FC< ArtistProps>  = (props) =>{
    return <div className ="Album">
        <img className ="Artist__img" src={props.url}></img>
        <div className ="Artist__container">
          <h1 className ="Artist__h1">{props.name}</h1>  
          <h2 className ="Artist__h2">{props.number} Suscribers</h2>
        </div>
    </div>
}