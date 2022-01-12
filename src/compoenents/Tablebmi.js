import React from 'react'

function tablebmi({results}) {
    return (
            <table border='1' style={{borderCollapse:"collapse"}}>
                <thead>
                    <tr>
                    <th>
                        Classification
                    </th> 
                    <th>
                        IMC
                    </th>     
                    </tr>
                </thead>
                <tbody>
                    <tr className={`${results<=18.5&&results>1?"bg-red":""}`}>
                    <td>Underweight</td>
                    <td>Under 18,5</td>
                    </tr>
                    <tr className={`${results>=18.5&&results<=24.9?"bg-green":""}`}>
                    <td>NormalWeight</td>
                    <td>Between 18,5 and 24,9</td>
                    </tr>
                    <tr className={`${results>=25&&results<=29.9?"bg-yellow":""}`}>
                    <td>Overweight</td>
                    <td>Bettween 25 and 29,9</td>
                    </tr>
                    <tr className={`${results>=30&&results<=34.9?"bg-red":""}`}>
                    <td>Obesety Class I</td>
                    <td>Between 30 and 34,9</td>
                    </tr>
                    <tr className={`${results>=35&&results<=39.9?"bg-red":""}`}>
                    <td>Obesety Class II</td>
                    <td>Between 35 and 39,9</td>
                    </tr>
                    <tr className={`${results>40?"bg-red":""}`}>
                    <td>Obesety Class III</td>
                    <td>Over 40</td>
                    </tr>
                </tbody>
            </table>
    )
}

export default tablebmi
