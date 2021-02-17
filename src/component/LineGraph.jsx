
import React ,{ useState,useEffect } from 'react'
import {Line} from 'react-chartjs-2'

const LineGraph = () => {
    const [data, setData] =useState({});
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120').then((response) => response.json()).then((data) => {
            console.log(data)
        })
       
    }, [])
    return (
        <div>
            {/* <Line
            data
            options
            /> */}
            <h2>dsfhuhfuh</h2>
            
        </div>
    )
}

export default LineGraph
