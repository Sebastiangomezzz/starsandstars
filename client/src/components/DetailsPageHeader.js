import React from "react"
import { Link } from "react-router-dom"
 
export default function DetailsPageHeader(props){
    
    

    return(
      
        <>
        
        {
        props.nasaData && 
        <div className="img-detail">
            <img src={props.nasaData.hdurl} alt="today-img"/>

            <div className="detail-title">
                <p className="detail-title">{props.nasaData.title}</p>
            </div>
        
            <div className="detail-line-1">
                <p className="detail-explanation">{props.nasaData.explanation}</p>
            </div>
            <div className="detail-line-2">
                <p className="detail-tagline">{props.nasaData.date}</p>
            </div>
        </div>
        }
        </>
    )
    
}