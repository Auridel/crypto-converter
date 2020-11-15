import React from "react";

import "./cryptoConvert.scss";
import ConvertBlock from "../convertBlock/convertBlock";

const CryptoConvert = () => {
    return (
        <div className="convert">
            <ConvertBlock/>
            <ConvertBlock/>
        </div>
    )
};

export default CryptoConvert;