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
        "proName": "FOREXCOM:GBPUSD",
        "title": "GBPUSD"
    },
    {
        "proName": "FOREXCOM:USDJPY",
        "title": "USDJPY"
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
]

function Chart() {

    const [theme, setTheme] = useState('light')
    const [symbol, setSymbol] = useState(symbolList[0].proName)
    const [chartType, setChartType] = useState(false) // false - HTFs, true - LTFs


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
        <Box sx={{ position: 'relative', maxWidth: '99.6vw' }}>
            <Box sx={{ position: 'absolute', top: '40px', left: '20px', zIndex: 1000, display: 'flex', gap: 2, alignItems: 'center' }}>
                <Selector setSymbol={setSymbol} symbol={symbol} />
                <ChartType setChartType={setChartType} chartType={chartType} />
            </Box>

            <Grid container spacing={0.5} sx={{ m: 0, p: 0, zIndex: 0 }}>
                <Grid item xs={6} sx={{ height: '50vh' }}>
                    <AdvancedRealTimeChart theme={theme} autosize
                        copyrightStyles={styles}
                        symbol={symbol}
                        interval={chartType ? 15 : 'D'}
                        enable_publishing={false}
                        hide_top_toolbar={true}
                        hide_side_toolbar={true}
                        hide_legend={false}
                    ></AdvancedRealTimeChart>
                </Grid>

                <Grid item xs={6} sx={{ height: '50vh' }}>
                    <AdvancedRealTimeChart theme={theme} autosize
                        copyrightStyles={styles}
                        symbol={symbol}
                        interval={chartType ? 5 : 240}
                        enable_publishing={false}
                        hide_top_toolbar={true}
                        hide_side_toolbar={true}
                        hide_legend={false}
                    ></AdvancedRealTimeChart>
                </Grid>

                <Grid item xs={6} sx={{ height: '50vh' }}>
                    <AdvancedRealTimeChart theme={theme} autosize
                        copyrightStyles={styles}
                        symbol={symbol}
                        interval={chartType ? 3 : 60}
                        enable_publishing={false}
                        hide_top_toolbar={true}
                        hide_side_toolbar={true}
                        hide_legend={false}
                    ></AdvancedRealTimeChart>
                </Grid>

                <Grid item xs={6} sx={{ height: '50vh' }}>
                    <AdvancedRealTimeChart theme={theme} autosize
                        copyrightStyles={styles}
                        symbol={symbol}
                        interval={chartType ? 1 : 15}
                        enable_publishing={false}
                        hide_top_toolbar={true}
                        hide_side_toolbar={true}
                        hide_legend={false}
                    ></AdvancedRealTimeChart>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Chart
