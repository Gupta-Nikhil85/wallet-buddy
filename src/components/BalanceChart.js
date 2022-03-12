import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
import { chartHelper } from './chartHelper'
Chart.register(ArcElement)


const BalanceChart = (props) => {
    const {title}= props;
    const {chartData, total}= chartHelper(props);
    return (
        <div className='col-12 card rounded-lg shadow-lg'>
            <div className='row p-4'>
                <div className='col-12 text-center'>
                    <h3 className='font-size-20'>{title}</h3>
                    <h4 className='font-size-20'> Rs. {total}</h4>
                </div>
                <Doughnut data={chartData}/>
            </div>
        </div>
    )
}

export default BalanceChart