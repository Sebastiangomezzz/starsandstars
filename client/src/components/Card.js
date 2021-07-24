import React from "react";
import CardsList from "./CardsList";


export default function Card(props) {
    console.log(props);
    //  const { forEachCard } = props.forEachCard
    
    
    return(
        
       
        <div>
            <img src={props.hdurl} alt="detail-img"/>

        <div className="detail-title">
            <p className="detail-title">{props.title}</p>
        </div>

        <div className="detail-line-1">
            <p className="detail-explanation">{props.explanation}</p>
        </div>
        <div className="detail-line-2">
            <p className="detail-tagline">{props.date}</p>
        </div>
        </div>
           
    )
}