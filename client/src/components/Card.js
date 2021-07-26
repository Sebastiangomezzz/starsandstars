import React from "react";
import { Link } from "react-router-dom"
import App from "../App"


export default function Card(props) {
    const {
        hdurl,
        title,
        explanation,
        date} = props.data
    
    //  const { forEachCard } = props.forEachCard
    
    console.log(props.data.image)

    return(
       <>
            <div>
               <img src={hdurl} alt="card-detail-img"/>

            <div className="detail-title">
                <p className="detail-title">{title}</p>
            </div>

            <div className="detail-line-1">
                <p className="detail-explanation">{explanation}</p>
            </div>
            <div className="detail-line-2">
                <p className="detail-tagline">{date}</p>
            </div>
            </div>
     </>
 
    )
}