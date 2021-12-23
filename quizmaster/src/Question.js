import React from "react"


export default function Question(props){
  
  

   


    
    return(
        <div className="question--first">
            
        <h2 className="question">Question: {props.question}</h2>
       
       
        <h3 className="answers">Possible answers:  
       
       
        {props.answers}
        
        
        </h3>
</div>
    )

}


