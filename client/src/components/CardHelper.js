import React from 'react'
import Card from './Card'
import CardsList from './CardsList'

export default function CardHelper(props){
    console.log(props)
    
    const { hdrul, title, explanation, date } = props.forEachCard
    
    return (
        <div>
          <Card 
            image={props.forEachCard.hdrul}
            title={props.forEachCard.title}
            explanation={props.forEachCard.explanation}
            date={props.forEachCard.date}
        
          />
        </div>
      )
}

  
