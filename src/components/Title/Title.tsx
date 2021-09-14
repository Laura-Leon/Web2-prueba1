import React from "react";
import './Title.css';

interface TitleProps {
  title: string;
  url?:string;
  subtitle?:string;
  disablePhoto?: boolean;
}

export const Title: React.FC<TitleProps>  = (props) =>{

  let className = 'Title';
  if (props.disablePhoto) {
     className += ' Title__img--disable';
      
  }
  


    return <div className ="Title">
        <img className ="Title__img" src={props.url}></img>
        <div className ="Title__container">
          <h2 className ="Title__h2">{props.subtitle}</h2>
          <h1 className ="Title__h1">{props.title}</h1>  
        </div>
    </div>
}