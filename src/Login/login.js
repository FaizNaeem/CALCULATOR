import React from "react";
import stlyle from "./login.css" 

function Login () {
    function Cal (val){
  document.getElementById('input').value += val
  return val
// console.log('hi')
   }
   function Res () {
    let x = document.getElementById('input').value
    let y = eval(x)
    document.getElementById('input').value = y
    // console.log('hello')
    return y 
   }
    function Clear (){
     document.getElementById('input').value = ""
    
    }
   const Del=()=>{ 
    let Del = document.getElementById('input').value
    
    document.getElementById('input').value = Del.slice(0,-1)
   }
   
    return(
        <div className="container">
            <div className="second-div"> 
            <input typeof="text" id="input" placeholder="0"/>
            <button id="cel" value="" onClick={()=>Clear('')}>C</button >
            <button id="cel" value=""  onClick={()=>Del('')}>DEl</button >
            <button id="cel" value="%" onClick={()=>Cal('%')}>%</button>
            <button id="cel" value="/" onClick={()=>Cal('/')}>/</button >
            <button id="cel" value="7" onClick={()=>Cal('7')}>7</button >
            <button id="cel" value= "8" onClick={()=>Cal('8')}>8</button>
            <button id="cel" value="9" onClick={()=>Cal('9')}>9</button >
            <button id="cel" value="*" onClick={()=>Cal('*')}>*</button >
            <button id="cel" value="4" onClick={()=>Cal('4')}>4</button >
            <button id="cel" value="5" onClick={()=>Cal('5')}>5</button >
            <button id="cel" value="6" onClick={()=>Cal('6')}>6</button >
            <button id="cel" value="-" onClick={()=>Cal('-')}>-</button >
            <button id="cel" value="1" onClick={()=>Cal('1')}>1</button >
            <button id="cel" value="2" onClick={()=>Cal('2')}>2</button >
            <button id="cel" value="3" onClick={()=>Cal('3')}>3</button >
            <button id="cel" value="+" onClick={()=>Cal('+')}>+</button > 
            <button id="cel" value="." onClick={()=>Cal('.')}>.</button >
            <button id="cel" value= "0" onClick={()=>Cal('0')}>0</button >
            <button id="Result" value="=" onClick={()=>Res('=')}>=</button>
            </div>
       
        
 
       </div>
    )

}

export default Login