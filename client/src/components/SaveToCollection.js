import React from 'react'
import App from '../App';

export default function SaveToCollection(props){

const { selectedPic } = props;
console.log(selectedPic)

const handleSave =()=>{

}

return(
<div> 
<button onClick={handleSave}>
Save to favorites
</button>
</div>
)
}