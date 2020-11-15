import React, {useState} from "react";

import "./convertBlock.scss";
import CurrencyList from "../currencyList/currencyList";

const ConvertBlock = ({label, value, setter}) => {
    const [currency, setCurrency] = useState("USD");
    const [editable, setEditable] = useState(false);

    return (
        <div className="convert__block">
            <input
                value={value}
                onChange={(e) => {
                    if((/^[\d.]+$/).test(e.target.value)) {
                        console.log((/\d/).test(e.target.value))
                        setter(e.target.value)
                    }
                }}
                type="text" className="convert__input"/>
            <button
                onClick={() => setEditable(!editable)}
                className="convert__currency">{currency}</button>
            {editable? <CurrencyList label={label} trigger={setEditable} value={setCurrency}/> : ""}
        </div>
    )
}

export default ConvertBlock;