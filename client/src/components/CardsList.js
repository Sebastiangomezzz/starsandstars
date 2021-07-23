import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";



function CardsList(){
    const [cardState, setCardState] = useState([])
    
    
    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=4nNodO7eptWEC8F8NiG9XcA3x5A4AYqADrniZGFu&count=20")
        .then(res=>{
            console.log(res)
            const card = res.data
            setCardState(card)
        })
    }, [])
    
    return(
        <>
        {cardState.map((forEachCard)=>{
            return(
                <div key={forEachCard.hdurl} >
                    <img src={`${forEachCard.url}`} />                                        
                </div>
            )
        })
        }
        


        </>
    )
}


export default CardsList