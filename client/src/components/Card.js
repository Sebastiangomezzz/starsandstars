import React from "react";
import { Link } from "react-router-dom"
import App from "../App"
import nextId from "react-id-generator";

export default function Card(props) {
    const {cardData} = props
    console.log(cardData);
    //  const { forEachCard } = props.forEachCard
    
    
    return(
        
       <>
        {cardData.map((forEachCard)=>{
            const Id = nextId()        

            return(       
                <div key={Id}>
                <img src={`${forEachCard.url}`} alt="card"/>
                <Link to={`/details/:${Id}`}>See the details</Link>
                {/* <CardHelper
                forEachCard={forEachCard}
                />     */}
                </div>
            )
        })
        }


        {/* {
            props &&
        <div>
            <img src={props.hdurl} alt="card-detail-img"/>

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
    } */}
    </>  
    )
}