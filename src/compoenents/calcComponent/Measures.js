import React from 'react'

function Measures({ units, setUnits, setUnitSys }) {
    return (
        <div className='btn-radio'>
            <input type="radio" id='meter' name='selectMeasure' value='meters' checked={units==='meters'?true:false} onChange={(e)=> {
                setUnits(e.target.value)
                setUnitSys('metric')
            }}/>
            <label htmlFor="meter">Metric</label>
            <input type="radio" id='inches' name='selectMeasure' value='inches' checked={units==='inches'?true:false} onChange={(e)=> {
                setUnits(e.target.value)
                setUnitSys('imperial')
            }}/>
            <label htmlFor="inches">Imperial</label>
        </div>
    )
}

export default Measures
