import React, { useState } from 'react'
import Switch from '@mui/material/Switch';

const ChartType = ({ setChartType, chartType }) => {

    const handleChange = (event) => {
        setChartType(!chartType);
    };

    return (
        <div className='flex justify-center items-center border px-1 rounded-lg'>
            <div>HTFs</div>
            <Switch
                checked={chartType}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <div>LTFs</div>

        </div>
    )
}

export default ChartType