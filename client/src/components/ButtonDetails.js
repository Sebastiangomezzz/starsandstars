import React from "react";
import { Link } from "react-router-dom"

function ButtonDetails(props){
    const { url } = props


    return(
        <button >
        
        <Link to={"/details/${url}"} > Details </Link>
        
        </button>
    )
}