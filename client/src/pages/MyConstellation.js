import React, { useEffect } from 'react'
import { arrayOfFavorites } from '../services/favorites';



export default function MyConstellation(props) {


    let Id 
    if(props.user){
    Id = props.user._id
    }
   
    
    function handleFav(){
        console.log(props)

        arrayOfFavorites(Id)
        .then((res)=>{
        
            console.log(res.data)
            
            }
        )  
    }

    useEffect(()=>{
        handleFav()
    }, [Id])

      
    return (
        <div>
            <h1>Hola que ase</h1>
        </div>
    )
    
}