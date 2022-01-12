import React from 'react'

const calculate = (meters,centimeters,weight) => {
    const number = `${meters}.${centimeters}`;
    const calc = weight/(number*number);
    return calc.toFixed(2)
}

const calculateImperial = (foot,inch,weight) => {
    const ftToInch = foot*12;
    const number = parseInt(ftToInch) + parseInt(inch);
    const calc = (weight/number/number)*703;
    return calc.toFixed(2)
}

function calcResult({ setResults, heightMain,heightSecondary,weight,unitSys }) {
    return (
        <>
            <button onClick={
                unitSys==='metric'?
                () => setResults(calculate(heightMain,heightSecondary,weight)):
                () => setResults(calculateImperial(heightMain,heightSecondary,weight))
            }>Calculate</button>
        </>
    )
}

export default calcResult
