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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chart />} />
        <Route path="/lot-size-calculator" element={<LotSize />} />
      </Routes>
    </BrowserRouter>
    // <Chart />

  )
}

export default App
