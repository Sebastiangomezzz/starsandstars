import React, { useEffect, useState } from 'react'
import { arrayOfFavorites, deleteFavorite } from '../services/favorites';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'




export default function MyConstellation(props) {

    const [favoritesArray, setFavoritesArray] = useState([])
    const [deleteFavsArray, setDeleteFavsArray] = useState([])
    const { setSelectedPic } = props



    let Id = null
    
    if(props.user){
        Id = props.user._id
    }
        
    function handleFav(){

        arrayOfFavorites(Id)
        .then((res)=>{
        const array = res.data
        setFavoritesArray(array)               
        })  
    }


    function handleDelete(fecha){
        deleteFavorite(Id, fecha)
        .then(res=>handleFav())
        toast("You have deleted the picture")
    }

    useEffect(()=>{
        handleFav()
    }, [])

    

    return (
        <div className="login">
            <h1>Welcome to your Constellation!</h1>
            <div className="gallery-container">
                {favoritesArray.map((element)=>{
                    return(
                        <div className='gallery-div' key={element.url}>
                             <Zoom overlayBgColorEnd="rgba(0, 0, 0, 0.75)" overlayBgColorStart="rgba(0, 0, 0, 0)">
                            <img className='gallery-img' src={element.hdurl} alt="card-detail-img"/>
                             </Zoom>
                            <div >
                                <p >{element.title}</p>
                            </div>
                            <Link to={"/details"} onClick={()=>setSelectedPic(element)}>
                            <p>See details and Send a Star</p>
                            </Link>
                            <button className= "new-btn" onClick={()=>handleDelete(element.date)} >
                            Delete
                            </button>
                        </div>
                    )
            
                })
                }
            </div>
        </div>
    )
    
}