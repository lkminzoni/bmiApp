import React from 'react'

function WeightInp({weight,setWeight,units}) {

    return (
        <div className='input'>
            <h2>Weigth</h2>
            <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            <p className='mesures'>{units === 'meters' ? 'Kg' : 'Lb'}</p>
        </div>
    )
}

export default WeightInp
