import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import nextId from "react-id-generator";
import CardHelper from "./CardHelper";


function CardsList(){
    const [cardState, setCardState] = useState([])
    
    
    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=4nNodO7eptWEC8F8NiG9XcA3x5A4AYqADrniZGFu&count=15")
        .then(res=>{
            console.log(res)
            const card = res.data
            setCardState(card)
        })
    }, [])
    
    return(
        <>
        
        {cardState.map((forEachCard)=>{
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
        


        </>
    )
}


export default CardsList