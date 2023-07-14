import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './App.css'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Selector from './Selector';
import Chart from './Chart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LotSize from './LotSize';

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

function App() {

  const [theme, setTheme] = useState('light')
  const [symbol, setSymbol] = useState(symbolList[0].proName)

  useEffect(() => {
    document.title = `TVMC - ${symbolList[0].proName.split(':')[1]}`
  }, [])

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
    // <Box sx={{ position: 'relative', maxWidth: '99.6vw' }}>
    //   <Box sx={{ position: 'absolute', top: '40px', left: '20px', zIndex: 1000 }}>
    //     <Selector setSymbol={setSymbol} symbol={symbol} />
    //   </Box>

    //   <Grid container spacing={0.5} sx={{ m: 0, p: 0, zIndex: 0 }}>
    //     <Grid item xs={6} sx={{ height: '50vh' }}>
    //       <AdvancedRealTimeChart theme={theme} autosize
    //         copyrightStyles={styles}
    //         symbol={symbol}
    //         interval={'D'}
    //         enable_publishing={false}
    //         hide_top_toolbar={true}
    //         hide_side_toolbar={true}
    //         hide_legend={false}
    //       ></AdvancedRealTimeChart>
    //     </Grid>

    //     <Grid item xs={6} sx={{ height: '50vh' }}>
    //       <AdvancedRealTimeChart theme={theme} autosize
    //         copyrightStyles={styles}
    //         symbol={symbol}
    //         interval={240}
    //         enable_publishing={false}
    //         hide_top_toolbar={true}
    //         hide_side_toolbar={true}
    //         hide_legend={false}
    //       ></AdvancedRealTimeChart>
    //     </Grid>

    //     <Grid item xs={6} sx={{ height: '50vh' }}>
    //       <AdvancedRealTimeChart theme={theme} autosize
    //         copyrightStyles={styles}
    //         symbol={symbol}
    //         interval={60}
    //         enable_publishing={false}
    //         hide_top_toolbar={true}
    //         hide_side_toolbar={true}
    //         hide_legend={false}
    //       ></AdvancedRealTimeChart>
    //     </Grid>

    //     <Grid item xs={6} sx={{ height: '50vh' }}>
    //       <AdvancedRealTimeChart theme={theme} autosize
    //         copyrightStyles={styles}
    //         symbol={symbol}
    //         interval={15}
    //         enable_publishing={false}
    //         hide_top_toolbar={true}
    //         hide_side_toolbar={true}
    //         hide_legend={false}
    //       ></AdvancedRealTimeChart>
    //     </Grid>
    //   </Grid>
    // </Box>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
        <Route path="/" element={<Chart />} />
        <Route path="/lot-size-calculator" element={<LotSize />} />
      </Routes>
    </BrowserRouter>
    // <Chart />

  )
}

export default App
