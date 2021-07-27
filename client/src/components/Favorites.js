import React from 'react'
import App from '../App';
import { constellation } from '../services/favorites'


export default function Favorites(props){

const { selectedPic } = props;
let Id 
if(props.user){
  Id = props.user._id
}
console.log(selectedPic)

function handleSave(){
  
    constellation(Id, selectedPic)
    .then((res)=>{
      console.log(res)
    })

}

return(
<div> 
  <button onClick={handleSave}>
  Save to My Favorites
  </button>
</div>
)
}