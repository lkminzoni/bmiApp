import React, { useState } from 'react';
import WeightInp from './calcComponent/WeightInp';
import HeightInp from './calcComponent/HeightInp';
import CalcResult from './calcComponent/CalcResult';
import Tablebmi from './Tablebmi';
import Measures from './calcComponent/Measures';

function CalcComponent() {
    const [weight,setWeight]=useState(0);
    const [heightMain,setHeightMain]=useState(0);
    const [heightSecondary,setHeightSecondary]=useState(0);
    const [results,setResults]=useState(0);
    const [units,setUnits]=useState('meters');
    const [unitSys,setUnitSys]=useState('metric');


    return (
        <>
            <h1>Check your BMI</h1> 
            <div className="input-container">
                <WeightInp weight={weight} setWeight={setWeight} units={units}/>
                <HeightInp 
                    heightMain={heightMain} 
                    setHeightMain={setHeightMain} 
                    heightSecondary={heightSecondary}
                    setHeightSecondary={setHeightSecondary}
                    units={units}/>
            </div>
            <Measures units={units} setUnits={setUnits} setUnitSys={setUnitSys}/>
            <CalcResult setResults={setResults} weight={weight} heightMain={heightMain} heightSecondary={heightSecondary} unitSys={unitSys}/>

            {results > 0 ? <p className='result'>Result = <strong>{results}</strong></p>:<p style={{marginBottom:"2.65rem"}}></p>}

            <Tablebmi results={results}/>
            
        </>
    )
}

export default CalcComponent
