import React from "react";
import CryptoTable from "../cryptoConvert/cryptoTable";
import CryptoConvert from "../cryptoTable/cryptoConvert";

const App = () => {
    return (
        <div className="container">
            <CryptoTable/>
            <CryptoConvert/>
        </div>
    )
};

export default App;