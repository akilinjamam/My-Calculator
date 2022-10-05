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
    // symbols
    const plus = '+';
    const minus = '-';
    const multiply = '*';
    const devide = '/';
    const percent = '%'

    let [total, setTotal] = useState('')
    let [secondTotal, setSecondTotal] = useState('')
    const [symboles, setSymboles] = useState('')
    const [parcentage, setParcentage] = useState()
    const [percentSymbol, setPercentSymbol] = useState()
    const [calc, setCalc] = useState()

    const setSymbole = (symbole) => {
        setSymboles(symbole)
    }

    const parsedTotal = parseFloat(total)
    const parsedSecondTotal = parseFloat(secondTotal)

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
        setCalc('')
        setPercentSymbol('')
        setParcentage('')
        setPercentSymbol('')
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
        if (percentSymbol) {
            setPercentSymbol('')
            setSecondTotal(secondTotal)
            setCalc('')
            setParcentage('')
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

    const setparcentage = (percent) => {

        if (percent) {
            const total = calc / 100
            setParcentage(total)
            setPercentSymbol(percent)
        }
    }

    return (
        <div className='body'>


            <div className='display' >
                {total} {total && symboles} {secondTotal}{percentSymbol}   {<p>  {parcentage ? parcentage : calc} </p>}
            </div>

            <div className='button-side' >

                <button className='red ' id='clear' onClick={del}>Clear</button>
                <button className='red' onClick={backSpace}> C </button>
                <button className='symbol' disabled={!total} onClick={() => setSymbole(devide)}>&divide;</button>
                <button onClick={() => setNumber(seven)}>7</button>
                <button onClick={() => setNumber(eight)}>8</button>
                <button onClick={() => setNumber(nine)}>9</button>
                <button className='symbol' disabled={!total} onClick={() => setSymbole(multiply)}>&times;</button>
                <button onClick={() => setNumber(four)}>4</button>
                <button onClick={() => setNumber(five)}>5</button>
                <button onClick={() => setNumber(six)}>6</button>
                <button className='symbol' onClick={() => setSymbole(minus)}>-</button>
                <button onClick={() => setNumber(one)}>1</button>
                <button onClick={() => setNumber(two)}>2</button>
                <button onClick={() => setNumber(three)}>3</button>
                <button className='symbol' onClick={() => setSymbole(plus)}>+</button>
                <button onClick={() => setNumber(point)}>.</button>
                <button onClick={() => setNumber(zero)}>0</button>
                <button className='orange' disabled={calc} onClick={totalCalculation}>=</button>
                <button disabled={!calc} onClick={() => setparcentage(percent)} className='symbol'>%</button>
            </div>
        </div>
    );
};

export default Calculator;