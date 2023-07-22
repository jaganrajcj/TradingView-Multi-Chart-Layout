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
    const [layout, setLayout] = useState(0) // 0 - 6 chart, 1 - 4 chart


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
            <Box sx={{ position: 'absolute', top: '55px', left: '20px', zIndex: 1000, display: 'flex', gap: 2, alignItems: 'center' }}>
                <Selector setSymbol={setSymbol} symbol={symbol} />
                <div className='flex justify-center items-center border py-1.5 px-2 rounded-md gap-3'>

                    <span className={`p-1 ${layout == 0 ? 'bg-blue-500 text-gray-200' : null} rounded-md `} onClick={() => { setLayout(0) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H6v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H6V9H1Zm6 7h5V9H7v7Zm6 0h3.5c.83 0 1.5-.67 1.5-1.5V9h-5v7Zm5-8V2.5c0-.83-.67-1.5-1.5-1.5H13v7h5Zm-6-7H7v7h5V1ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"></path></svg>
                    </span>

                    <span className={`p-1 ${layout == 1 ? 'bg-blue-500 text-gray-200' : null} rounded-md `} onClick={() => { setLayout(1) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7Zm8-8V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"></path></svg>
                    </span>
                </div>
                {layout == 1 && <ChartType setChartType={setChartType} chartType={chartType} />}
            </Box>

            {
                layout == 1 ?
                    <Grid container spacing={0.0} sx={{ m: 0, p: 0, zIndex: 0 }}>
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
                    : <Grid container spacing={0.0} sx={{ m: 0, p: 0, zIndex: 0 }}>
                        <Grid item xs={4} sx={{ height: '50vh' }}>
                            <AdvancedRealTimeChart theme={theme} autosize
                                copyrightStyles={styles}
                                symbol={symbol}
                                interval={240}
                                enable_publishing={false}
                                hide_top_toolbar={true}
                                hide_side_toolbar={true}
                                hide_legend={false}
                            ></AdvancedRealTimeChart>
                        </Grid>

                        <Grid item xs={4} sx={{ height: '50vh' }}>
                            <AdvancedRealTimeChart theme={theme} autosize
                                copyrightStyles={styles}
                                symbol={symbol}
                                interval={60}
                                enable_publishing={false}
                                hide_top_toolbar={true}
                                hide_side_toolbar={true}
                                hide_legend={false}
                            ></AdvancedRealTimeChart>
                        </Grid>
                        <Grid item xs={4} sx={{ height: '50vh' }}>
                            <AdvancedRealTimeChart theme={theme} autosize
                                copyrightStyles={styles}
                                symbol={symbol}
                                interval={15}
                                enable_publishing={false}
                                hide_top_toolbar={true}
                                hide_side_toolbar={true}
                                hide_legend={false}
                            ></AdvancedRealTimeChart>
                        </Grid>

                        <Grid item xs={4} sx={{ height: '50vh' }}>
                            <AdvancedRealTimeChart theme={theme} autosize
                                copyrightStyles={styles}
                                symbol={symbol}
                                interval={5}
                                enable_publishing={false}
                                hide_top_toolbar={true}
                                hide_side_toolbar={true}
                                hide_legend={false}
                            ></AdvancedRealTimeChart>
                        </Grid>
                        <Grid item xs={4} sx={{ height: '50vh' }}>
                            <AdvancedRealTimeChart theme={theme} autosize
                                copyrightStyles={styles}
                                symbol={symbol}
                                interval={3}
                                enable_publishing={false}
                                hide_top_toolbar={true}
                                hide_side_toolbar={true}
                                hide_legend={false}
                            ></AdvancedRealTimeChart>
                        </Grid>
                        <Grid item xs={4} sx={{ height: '50vh' }}>
                            <AdvancedRealTimeChart theme={theme} autosize
                                copyrightStyles={styles}
                                symbol={symbol}
                                interval={1}
                                enable_publishing={false}
                                hide_top_toolbar={true}
                                hide_side_toolbar={true}
                                hide_legend={false}
                            ></AdvancedRealTimeChart>
                        </Grid>
                    </Grid>
            }
        </Box >

    )
}

export default Chart
