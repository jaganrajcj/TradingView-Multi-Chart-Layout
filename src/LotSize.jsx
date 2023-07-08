import React, { useEffect } from 'react'

const LotSize = () => {


    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.cashbackforex.com/Content/remote/remote-widgets.js';

        document.body.appendChild(script);


        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {

        const innerHt = {
            __html: `
      RemoteCalc({
        "Url":"https://www.cashbackforex.com",
        "TopPaneStyle":"YmFja2dyb3VuZDogd2hpdGU7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7IGJvcmRlci1ib3R0b206IG5vbmU7IA==",
        "BottomPaneStyle":"YmFja2dyb3VuZDogd2hpdGU7IGJvcmRlcjogc29saWQgMXB4IGJsYWNrOyBjb2xvcjogYmxhY2s7",
        "ButtonStyle":"YmFja2dyb3VuZDogYmxhY2s7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLXJhZGl1czogMjBweDs=",
        "TitleStyle":"dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==",
        "TextboxStyle":"YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYWFhYQ==",
        "ContainerWidth":"665",
        "DefaultInstrument":"EUR-USD",
        "HighlightColor":"#ffff00",
        "IsDisplayTitle":false,
        "IsShowChartLinks":true,
        "IsShowEmbedButton":false,
        "CompactType":"large",
        "Calculator":"position-size-calculator",
        "ContainerId":"position-size-calculator-489263"
      });
    `,
        }

        const script = document.createElement('script');
        script.dangerouslySetInnerHTML = innerHt
        document.body.appendChild(script);


        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="position-size-calculator-489263">

        </div>
    )
}

export default LotSize