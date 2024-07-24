import React, { useState } from 'react'
import './quiz.css'
import {data} from '../../data'

export default function Quiz() {

  const [index,setIndex]=useState(0);
  const [question,setQuestion]=useState(data[index]);
  //for checking question is last or not
  const [isLastPage,setIsLastPage]=useState(false);
  const[score,setScore]=useState(0)
  const[lock,setLock]=useState(false)
  function checkAnswer(e,ans){
    if(lock===false){
      if(ans===question.ans){
        setScore(score+1)
        e.target.classList.add('correct');
      }
      else{
        e.target.classList.add('incorrect');
      }
      setLock(true)
    }
  }
  function nextQuestion(){
    //not last question
    
    setLock(false)
    if(index<data.length-1){
    setIndex(index+1)
    setQuestion(data[index+1])
    }
    //last question
    else{
      setIsLastPage(true);
    }
    const options = document.querySelectorAll('li');
    options.forEach(option => {
      option.classList.remove('correct');
      option.classList.remove('incorrect');
    });
  }
  if(isLastPage===true){
    return(
    <h2>Quiz Score={score}</h2>
    )
  }
  return (
    <div className='quiz'>
        <h1>Kod Quiz</h1>
        <h3>{question.question}</h3>
        <ul>
            <li onClick={(e)=>{checkAnswer(e,'1')}}>{question.option1}</li>
            <li onClick={(e)=>{checkAnswer(e,'2')}}>{question.option2}</li>
            <li onClick={(e)=>{checkAnswer(e,'3')}}> {question.option3}</li>
            <li onClick={(e)=>{checkAnswer(e,'4')}} >{question.option4}</li>
        </ul>
        <button onClick={nextQuestion}>NEXT</button>
        <div>Question {index+1} of {data.length}</div>
    </div>
  )
}
