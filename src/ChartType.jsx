import React, { useState } from 'react'
import Switch from '@mui/material/Switch';

const ChartType = ({ setTheme, theme }) => {

    const handleChange = (event) => {
        setTheme((prev) => prev === 'light'? 'dark': 'light');
    };

    return (
        <div className={`${theme="dark"? 'text-white': null} flex justify-center items-center px-1 rounded-lg`}>
            <div>Dark</div>
            <Switch
                checked={theme==='dark'? true: false}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <div>Light</div>

        </div>
    )
}

export default ChartType