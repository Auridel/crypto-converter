import React, {useState} from "react";

import "./convertBlock.scss";
import CurrencyList from "../currencyList/currencyList";

const ConvertBlock = () => {
    const [currency, setCurrency] = useState("BTC");
    const [editable, setEditable] = useState(false);

    return (
        <div className="convert__block">
            <input type="text" className="convert__input"/>
            <button
                onClick={() => setEditable(!editable)}
                className="convert__currency">{currency}</button>
            {editable? <CurrencyList trigger={setEditable} value={setCurrency}/> : ""}
        </div>
    )
}

export default ConvertBlock;