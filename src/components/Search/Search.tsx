import React from "react";
import './Search.css';


interface SearchProps {
    praceholder: string;
    url:string;

    actives?: boolean;
}

export const Search: React.FC<SearchProps>  = (props) =>{

    return <div className= "Search">
        <img className="Search__img" src= {props.url}/>
        <input className="Search__imput" type="text" placeholder={props.praceholder}></input>
    </div>
}