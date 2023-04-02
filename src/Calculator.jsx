import { useState } from "react";

export default function Calculator() {

    const [userInput, setUserInput]=useState("")
    const [operation, setOperation]=useState("")

    function onClickHandler(event){
        const obj={
            '+':function(x,y){return x+y},
            '-':function(x,y){return x-y},
            'X':function(x,y){return x*y},
            '/':function(x,y){return x/y},
          }
          const operators=['+','-','X','/']
        //   if(userInput.split("").filter(op=>operators.includes(op)).length>1)
        //   alert('Prohibited')
        
        // if(userInput.length>3) alert('You can only perform a single operation ')
        if(operators.includes(event.target.value)) setOperation(event.target.value)
        if(event.target.value!='='){
        setUserInput((prev)=>prev.concat(event.target.value))
        }else{
            const operands=userInput.split(operation).map(Number)
            console.log(typeof `${obj[operation](operands[0],operands[1])}`)
            setUserInput(`${obj[operation](operands[0],operands[1])}`)
        }
    }

    

    function clearNums(){
        setUserInput("")
    }
    return (

        <div>
            <h1>Calulator</h1>
            <input value={userInput} onChange={(event)=>{event.target.value=userInput}}></input>
            <br></br>
            <br></br>
            <button value={"1"}  onClick={onClickHandler} >1</button>
            <button value={"2"}  onClick={onClickHandler} >2</button>
            <button value={3} onClick={onClickHandler} >3</button>
            <button value={"+"}  onClick={onClickHandler}>+</button>
            <br />
            <button value={4}  onClick={onClickHandler}>4</button>
            <button value={5}  onClick={onClickHandler}>5</button>
            <button value={6}  onClick={onClickHandler}>6</button>
            <button value={"-"} onClick={onClickHandler} >-</button>
            <br />
            <button value={7}  onClick={onClickHandler}>7</button>
            <button value={8}  onClick={onClickHandler}>8</button>
            <button value={9}  onClick={onClickHandler}>9</button>
            <button value={'X'}  onClick={onClickHandler}>x</button>
            <br />
            
            <button value={0}  onClick={onClickHandler}>0</button>
            <button value={"."}  onClick={clearNums}>C</button>
            <button value={"="}  onClick={onClickHandler}>=</button>
            <button value={"/"}  onClick={onClickHandler}>/</button>
        </div>
    )
}