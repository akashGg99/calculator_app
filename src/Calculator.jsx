import { useState } from "react";

export default function Calculator() {

    const [userInput, setUserInput]=useState("")
    const [userValue, setUserValue]=useState("")

    function onClickHandler(event){
        setUserInput(event.target.value)
        console.log(event.target.value);
    }

    function onChangeHandler(event){
        setUserValue(event.target.value)
    }

    return (

        <div>
            <h1>Calulator</h1>
            <input value={userInput} onChange={onChangeHandler}></input>
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
            <button value={"X"}  onClick={onClickHandler}>x</button>
            <br />
            
            <button value={0}  onClick={onClickHandler}>0</button>
            <button value={"."}  onClick={onClickHandler}>C</button>
            <button value={"="}  onClick={onClickHandler}>=</button>
            <button value={"/"}  onClick={onClickHandler}>/</button>
        </div>
    )
}