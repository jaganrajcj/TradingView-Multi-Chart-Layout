import { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './App.css'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Selector from './Selector';
import ChartType from './ChartType';

const symbolList = [
    {
        "proName": "FOREXCOM:EURUSD",
        "title": "EURUSD"
    },
    {
        "proName": "FOREXCOM:USDJPY",
        "title": "USDJPY"
    },
    {
        "proName": "FOREXCOM:GBPUSD",
        "title": "GBPUSD"
    },
    {
        "proName": "FOREXCOM:USDCHF",
        "title": "USDCHF"
    },
    {
        "proName": "FOREXCOM:USDCAD",
        "title": "USDCAD"
    },
    {
        "proName": "FOREXCOM:AUDUSD",
        "title": "AUDUSD"
    },
    {
        "proName": "FOREXCOM:NZDUSD",
        "title": "NZDUSD"
    },
    {
        "proName": "FOREXCOM:EURGBP",
        "title": "EURGBP"
    },
    {
        "proName": "FOREXCOM:EURAUD",
        "title": "EURAUD"
    },
    {
        "proName": "FOREXCOM:GBPJPY",
        "title": "GBPJPY"
    },
    {
        "proName": "FOREXCOM:CHFJPY",
        "title": "CHFJPY"
    },
    {
        "proName": "FOREXCOM:NZDJPY",
        "title": "NZDJPY"
    },
    {
        "proName": "FOREXCOM:GBPCAD",
        "title": "GBPCAD"
    },
    {
        "proName": "FOREXCOM:XAUUSD",
        "title": "XAUUSD"
    },
]

function Chart() {

    const [theme, setTheme] = useState('light')
    const [symbol, setSymbol] = useState(symbolList[0].proName)


    const styles = {
        parent: {
            fontSize: "24px",
            color: "red",
            display: 'none',
            opacity: 0
        },
        link: {
            textDecoration: "line-trough",
        },
        span: {
            color: "darkblue",
        },
    };

    return (
        <Box sx={{ position: 'relative', maxWidth: '100vw' }}>
            <Box sx={{ position: 'absolute', 
                        top: '2px',
                        left: '5px', 
                        zIndex: 1000, 
                        display: 'flex',
                        width: '45vw',
                        gap: 2, 
                        alignItems: 'center', 
                        display: 'flex', 
                        justifyContent: 'space-between'}}>
                <Selector setSymbol={setSymbol} symbol={symbol} />
                {/* <ChartType setTheme={setTheme} theme={theme} /> */}
            </Box>
            <Grid container spacing={0.0} sx={{ m: 0, p: 0, zIndex: 0 }}>
                <Grid item xs={6} sx={{ height: '50vh' }}>
                    <AdvancedRealTimeChart theme={theme} autosize
                        copyrightStyles={styles}
                        symbol={symbol}
                        interval={'D'}
                        enable_publishing={false}
                        hide_top_toolbar={false}
                        hide_side_toolbar={true}
                        hide_legend={false}
                    ></AdvancedRealTimeChart>
                </Grid>

                <Grid item xs={6} sx={{ height: '50vh' }}>
                    <AdvancedRealTimeChart theme={theme} autosize
                        copyrightStyles={styles}
                        symbol={symbol}
                        interval={'D'}
                        enable_publishing={false}
                        hide_top_toolbar={false}
                        hide_side_toolbar={true}
                        hide_legend={false}
                    ></AdvancedRealTimeChart>
                </Grid>
                <Grid item xs={6} sx={{ height: '50vh' }}>
                    <AdvancedRealTimeChart theme={theme} autosize
                        copyrightStyles={styles}
                        symbol={symbol}
                        interval={'D'}
                        enable_publishing={false}
                        hide_top_toolbar={false}
                        hide_side_toolbar={true}
                        hide_legend={false}
                    ></AdvancedRealTimeChart>
                </Grid>

                <Grid item xs={6} sx={{ height: '50vh' }}>
                    <AdvancedRealTimeChart theme={theme} autosize
                        copyrightStyles={styles}
                        symbol={symbol}
                        interval={'D'}
                        enable_publishing={false}
                        hide_top_toolbar={false}
                        hide_side_toolbar={true}
                        hide_legend={false}
                    ></AdvancedRealTimeChart>
                </Grid>
            </Grid>
        </Box >

    )
}

export default Chart
