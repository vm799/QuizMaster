import React from "react"


export default function Question(props){
  
  

   


    
    return(
        <div className="question--first">
            
        <h2 className="question">Question: </h2>
        <div className= "question--data">{props.question}
        </div>
       
       
        <h3 className="answers">Possible answers:  </h3>
       
        <div className= "answer--data"><p>{props.answers}</p>
        </div>
        
</div>
    )

}


