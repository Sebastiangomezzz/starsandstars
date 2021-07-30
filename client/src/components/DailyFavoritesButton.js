import React from 'react'
import App from '../App';
import { constellation } from '../services/favorites'
import { toast } from 'react-toastify';




export default function DailyFavoritesButton(props){

const { data } = props;
console.log(data, "linea 11")
let Id 
if(props.user){
  Id = props.user._id
}
console.log(Id)

function handleSave(){
  
    constellation(Id, data)
    .then((res)=>{
      toast("You added it!")
      console.log(res)
    })

}


return(
<div> 
  <button className="new-btn" onClick={handleSave}>
  Add to My Constellation
  </button>
</div>
)
}