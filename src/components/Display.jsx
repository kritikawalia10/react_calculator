import React from 'react'
import { useState } from 'react'

function Display() {

    const [expression, setExpression] = useState("")

    const handleClickBtn = (e) => {
        setExpression(expression + e);
    }

    const handleClickAC = () => {
        setExpression("");
    }

    const handleClickEqual = () => {
        setExpression(eval(expression));
    }

    const handleClickDEL = () => {
        
        if(typeof ex1 != "string"){
            let ex1 = expression.toString()
            setExpression(ex1.slice(0, -1))
        }else{
            setExpression(expression.slice(0, -1));

        }
        
    }

    return (
        <>
            <div className="container">
                <div>
                    <input style={{ width: "12.2rem", height: "3rem",textAlign: "right" }} type="text" defaultValue={expression} />
                </div>

                <div>
                    <button style={{ width: "6.3rem", height: "3rem", backgroundColor: "#e39b17" }} onClick={handleClickAC}>AC</button>
                    <button style={{ width: "3rem", height: "3rem",backgroundColor : "red" }} onClick={handleClickDEL}>DEL</button>
                    <button style={{ width: "3rem", height: "3rem", backgroundColor: "#b5b3b0" }} onClick={() => handleClickBtn('+')}>+</button>
                </div>

                <div>
                    <button style={{ width: "3.1rem", height: "3rem" }} onClick={() => handleClickBtn('1')}>1</button>
                    <button style={{ width: "3rem", height: "3rem" }} onClick={() => handleClickBtn('2')}>2</button>
                    <button style={{ width: "3rem", height: "3rem" }} onClick={() => handleClickBtn('3')}>3</button>
                    <button style={{ width: "3rem", height: "3rem", backgroundColor: "#b5b3b0"}} onClick={() => handleClickBtn('-')}>-</button>
                </div>

                <div>
                    <button style={{ width: "3.1rem", height: "3rem" }} onClick={() => handleClickBtn('4')}>4</button>
                    <button style={{ width: "3rem", height: "3rem" }} onClick={() => handleClickBtn('5')}>5</button>
                    <button style={{ width: "3rem", height: "3rem" }} onClick={() => handleClickBtn('6')}>6</button>
                    <button style={{ width: "3rem", height: "3rem", backgroundColor: "#b5b3b0"}} onClick={() => handleClickBtn('*')}>*</button>
                </div>

                <div>
                    <button style={{ width: "3.1rem", height: "3rem" }} onClick={() => handleClickBtn('7')}>7</button>
                    <button style={{ width: "3rem", height: "3rem" }} onClick={() => handleClickBtn('8')}>8</button>
                    <button style={{ width: "3rem", height: "3rem" }} onClick={() => handleClickBtn('9')}>9</button>
                    <button style={{ width: "3rem", height: "3rem", backgroundColor: "#b5b3b0"}} onClick={() => handleClickBtn('/')}>/</button>
                </div>

                <div>
                    <button style={{ width: "3rem", height: "3rem" }} onClick={() => handleClickBtn('.')}>.</button>
                    <button style={{ width: "3rem", height: "3rem" }} onClick={() => handleClickBtn('0')}>0</button>
                    <button style={{ width: "6.3rem", height: "3rem" }}onClick={handleClickEqual}>=</button>
                </div>
            </div>
        </>
    )
}

export default Display