
export default function Calculator(){

    return(

        <div>
        <hi>Calulator</hi>
        <input  value={userInput}></input>
        <br></br>
        <p>Answer : </p>
        <br></br>
        <CalcButton number={1} />
        <CalcButton number={2} />
        <CalcButton number={3} />
        <CalcButton number={"+"} />
        <br/>
        <CalcButton number={4} />
        <CalcButton number={5} />
        <CalcButton number={6} />
        <CalcButton number={"-"} />
        <br/>
        <CalcButton number={7} />
        <CalcButton number={8} />
        <CalcButton number={9} />
        <CalcButton number={"X"} />
        <br/>
        <CalcButton number={"."} />
        <CalcButton number={0} />
        <CalcButton number={"/"} />
        <CalcButton number={"="} />
    </div>
    )
}