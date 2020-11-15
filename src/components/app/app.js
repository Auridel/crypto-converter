import React from "react";
import CryptoTable from "../cryptoTable/cryptoTable";
import CryptoConvert from "../cryptoConvert/cryptoConvert";

import "./app.scss";

const App = () => {
    return (
        <div className="container">
            <CryptoTable/>
            <CryptoConvert/>
        </div>
    )
};

export default App;