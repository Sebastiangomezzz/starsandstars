import React from 'react';
import axios from 'axios'

// http://img.omdbapi.com/?apikey=ca98118&{y-esto tiene que ser dinamico}
export default function DidYouKnow(fechadelafoto) {
    function handleDisplay(){
        axios.get
    }


    return (
        <div>
        <button
			className='btn btn-secondary'
			onClick={() => {
			console.log("I'm in line 20 in ContactCard.js");
			handleDisplay()
			}}>
			Did you know?
			</button>
        </div>
    )
}

