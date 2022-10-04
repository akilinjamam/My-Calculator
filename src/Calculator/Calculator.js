import React, { useState } from 'react';
import './Calculator.css'


const Calculator = () => {

    const one = '1';
    const two = '2';
    const three = '3';
    const four = '4';
    const five = '5';
    const six = '6';
    const seven = '7';
    const eight = '8';
    const nine = '9';
    const zero = '0';
    const point = '.';

    const plus = '+';
    const minus = '-';
    const multiply = '*';
    const devide = '/';

    let [total, setTotal] = useState('')
    let [secondTotal, setSecondTotal] = useState('')
    const [symboles, setSymboles] = useState('')
    const [calc, setCalc] = useState()
    console.log(calc)
    const [active, setActive] = useState(false)
    console.log(symboles)


    const setSymbole = (symbole) => {
        setSymboles(symbole)
    }



    const parsedTotal = parseInt(total)
    const parsedSecondTotal = parseInt(secondTotal)



    const setNumber = (number) => {

        if (!secondTotal && !symboles) {
            const numbers = total + number
            setTotal(numbers)
        }



        if (total && symboles) {
            const numbers = secondTotal + number
            setSecondTotal(numbers)
        }




    }

    const del = () => {

        setTotal('')
        setSecondTotal('')
        setSymboles()
        setActive(false)
        setCalc('')
    }

    const backSpace = () => {
        if (total) {
            setTotal(total.slice(0, total.length - 1))
        }


        if (symboles) {
            setSymboles('')
            setTotal(total)
        }

        if (secondTotal) {
            setSecondTotal(secondTotal.slice(0, secondTotal.length - 1))
            setTotal(total)
            setSymboles(symboles)
            setCalc('')
        }
    }

    const totalCalculation = () => {

        if (symboles === '+' && parsedTotal && parsedSecondTotal) {
            const total = parsedTotal + parsedSecondTotal
            setCalc(total)
        }
        if (symboles === '-' && parsedTotal && parsedSecondTotal) {
            const total = parsedTotal - parsedSecondTotal
            setCalc(total)
        }
        if (symboles === '*' && parsedTotal && parsedSecondTotal) {
            const total = parsedTotal * parsedSecondTotal
            setCalc(total)
        }
        if (symboles === '/' && parsedTotal && parsedSecondTotal) {
            const total = parsedTotal / parsedSecondTotal
            setCalc(total)
        }

    }

    return (
        <div className='body'>


            <div className='main' >
                {total} {total && symboles} {secondTotal}  {<p> {calc}</p>}
            </div>

            <div className='button-side' >
                <div>
                    <button onClick={() => setNumber(seven)}>7</button>
                </div>
                <div>
                    <button onClick={() => setNumber(eight)}>8</button>
                </div>
                <div>
                    <button onClick={() => setNumber(nine)}>9</button>
                </div>
                <div>
                    <button onClick={() => setNumber(four)}>4</button>
                </div>
                <div>
                    <button onClick={() => setNumber(five)}>5</button>
                </div>
                <div>
                    <button onClick={() => setNumber(six)}>6</button>
                </div>

                <div>
                    <button onClick={() => setNumber(one)}>1</button>
                </div>
                <div>
                    <button onClick={() => setNumber(two)}>2</button>
                </div>
                <div>
                    <button onClick={() => setNumber(three)}>3</button>
                </div>
                <div>
                    <button onClick={() => setNumber(point)}>.</button>
                </div>
                <div >
                    <button onClick={() => setNumber(zero)}>0</button>
                </div>

                <div>
                    <button className='orange' disabled={calc} onClick={totalCalculation}>=</button>
                </div>
                <div>
                    <button className='symbol' onClick={() => setSymbole(plus)}>+</button>
                </div>
                <div>
                    <button className='symbol' onClick={() => setSymbole(minus)}>-</button>
                </div>
                <div>
                    <button className='symbol' disabled={!total} onClick={() => setSymbole(multiply)}>*</button>
                </div>
                <div>
                    <button className='symbol' disabled={!total} onClick={() => setSymbole(devide)}>/</button>
                </div>
                <div>
                    <button className='red' onClick={del}>del</button>
                </div>
                <div>
                    <button className='red' onClick={backSpace}> Back </button>
                </div>
            </div>


        </div>
    );
};

export default Calculator;