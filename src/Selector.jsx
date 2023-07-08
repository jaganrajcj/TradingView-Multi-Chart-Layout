import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
        "proName": "FOREXCOM:USDCHF",
        "title": "USDCHF"
    },
    {
        "proName": "FOREXCOM:EURJPY",
        "title": "EURJPY"
    },
    {
        "proName": "OANDA:US30USD",
        "title": "US30"
    },
    {
        "proName": "FOREXCOM:USDCAD",
        "title": "USDCAD"
    },
    {
        "proName": "FOREXCOM:XAUUSD",
        "title": "XAUUSD"
    },
    {
        "proName": "FOREXCOM:GBPUSD",
        "title": "GBPUSD"
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

const Selector = ({ setSymbol, symbol }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (proName) => {
        handleClose()
        setSymbol(proName)
    }

    const GetPairIcon = ({ countries }) => {


        const halfLength = Math.floor(countries.length / 2);
        const currency1 = countries.substring(0, halfLength);
        const currency2 = countries.substring(halfLength);

        const countryCode1 = currency1.slice(0, 2);
        const countryCode2 = currency2.slice(0, 2);

        const nonFx = ['XA']

        if (nonFx.includes(countryCode1))
            return (
                <div className='relative w-4 h-4 mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 -top-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
            )

        return (
            <div className='relative w-4 h-4 mr-2'>
                <img src={`https://s3-symbol-logo.tradingview.com/country/${countryCode2}.svg`} className="rounded-full w-[90%] h-[90%] border-white absolute -top-1 -right-1" />
                <img src={`https://s3-symbol-logo.tradingview.com/country/${countryCode1 || 'US'}.svg`} className="rounded-full w-full border border-white h-full absolute -bottom-[1px] -left-0" />

            </div>
        )
    }

    return (
        <div>
            <button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
                {symbol.split(':')[1]}
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* <GetPairIcon countries={symbol.title} /> */}
                {symbolList.map(symbol => (<MenuItem onClick={() => handleSelect(symbol.proName)} > {symbol.title}</MenuItem>))}

            </Menu>
        </div>
    )
}

export default Selector