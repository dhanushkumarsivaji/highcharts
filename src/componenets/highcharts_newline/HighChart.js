import hignCharConfig from './HighChartsConfig';
import React from 'react'
import ReactHighcharts from 'react-highcharts'
import HighChartsTheme from './HighChartsTheme'

ReactHighcharts.Highcharts.setOptions(HighChartsTheme)


const HignCharts = () => {
    return(
        <div style={{padding:'50px'}}>
             <h1 style={{color:'white'}}>Basic Line</h1>
            <ReactHighcharts config={hignCharConfig()}/>
        </div>
    )
}

export default HignCharts;