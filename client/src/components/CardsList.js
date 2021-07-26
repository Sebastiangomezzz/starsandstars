import React from "react";
import {Link} from "react-router-dom";
import Card from './Card'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import SaveToCollection from "./SaveToCollection";


function CardsList(props){
    const { data, setSelectedPic } = props
  
    return(
        <div className= "homepage list">
            
            {data.map((onePic)=>{
                console.log(onePic)
                return(
                    <>
                    <Zoom>
                       <img src={onePic.url} alt={"card-detail-img"}/>
                     </Zoom>
                     <Link to={"/details"} onClick={()=>setSelectedPic(onePic)}>
                       <p>See details</p>
                     </Link>
                     <SaveToCollection/>
                     </>
                    )
            })
            }
            
        </div>
    )
}


export default CardsList