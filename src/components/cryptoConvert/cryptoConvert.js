import React, {useState} from "react";

import "./cryptoConvert.scss";
import ConvertBlock from "../convertBlock/convertBlock";

const CryptoConvert = () => {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");


    return (
        <div className="convert">
            <ConvertBlock value={first} setter={setFirst} label="first"/>
            <ConvertBlock value={second} setter={setSecond} label="second"/>
        </div>
    )
};

export default CryptoConvert;