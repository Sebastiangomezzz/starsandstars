import React, { useEffect, useState } from 'react'
import { arrayOfFavorites } from '../services/favorites';



export default function MyConstellation(props) {

    const [favoritesArray, setFavoritesArray] = useState([])


    let Id 
    if(props.user){
    Id = props.user._id
    }
   
    
    function handleFav(){
        console.log(props)

        arrayOfFavorites(Id)
        .then((res)=>{
        const array = res.data
        setFavoritesArray(array)     

            
        })  
    }

    useEffect(()=>{
        handleFav()

        
        
    }, [Id])

      
    return (
        <div>
            {favoritesArray.map((element)=>{
                return(
                    <div key={element.url}>
                        <img src={element.hdurl} alt="card-detail-img"/>

                        <div className="detail-title">
                            <p className="detail-title">{element.title}</p>
                        </div>

                        <div className="detail-line-1">
                            <p className="detail-explanation">{element.explanation} </p>
                        </div>

                        <div className="detail-line-2">
                            <p className="detail-tagline">{element.date}</p>
                        </div>
                    </div>
                )
                
            }) 
            }      
        </div>
    )
    
}