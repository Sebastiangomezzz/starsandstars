import React from "react"
import { Link } from "react-router-dom"
import Search from "../components/Search"
 
export default function DetailsPageHeader(props){
    
    const {data} = props

    return(
      
        <div>
        
        {
        data && 
        <div className="img-detail">
            <br/>
            <div className="detail-title">
                <p className="detail-title">{data.title}</p>
            </div>
           
            <div className='img-container'>
                <img className= "header-pic" src={data.hdurl} alt="today-img"/>
            </div>

            
        
            <div className="detail-line-1">
                <p className="detail-explanation">{data.explanation}</p>
            </div>
            <div className="detail-line-2">
                <p className="detail-tagline">Photo taken on {data.date}
                </p>
            </div>
        </div>
        }
        
        <Search/>
        </div>
    )
    
}