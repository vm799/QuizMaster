import React from "react"
import Question from "./Question"


export default function App() {
  const[allQuestionData, setAllQuestionData]= React.useState([])

  const[questionData, setQuestionData]=  React.useState([])

  const[answerData, setAnswerData]=  React.useState([])

      React.useEffect(()=>{
        fetch("https://api.trivia.willfry.co.uk/questions?limit=5")
        .then(res => res.json())
        .then(data => 
          
          (setAllQuestionData(data))
         
         )
        .catch((error)=>{
          console.error('Error:', error)
        })
      }, [])

        


function getQuestionData(){
 
  for (let i in allQuestionData) {
    const question =allQuestionData[i]
   setQuestionData(question)
   const possibleAnswers  = allQuestionData[i].incorrectAnswers
   const correctAnswer  = allQuestionData[i].correctAnswer
  
   possibleAnswers.push(correctAnswer)
  setAnswerData(possibleAnswers)
  }
 
}


      return(
        <div>
          
          <h1 className="title">QUIZMASTER</h1>
        
         
          
          <h3 ><Question 
          question={questionData.question}
         
          answers={questionData.incorrectAnswers}
          /> </h3> 

         
          
          <button className="choose--question-btn"onClick={getQuestionData}>SELECT NEW QUESTIONS</button>
        
         
         
        </div>
        
      )

      }
     



