import React, {useState, useEffect} from "react";

import "./convertBlock.scss";
import CurrencyList from "../currencyList/currencyList";

const ConvertBlock = ({label, value, setter, convert, currency}) => {
    // const [currency, setCurrency] = useState("USD");
    const [editable, setEditable] = useState(false);

    useEffect(() => {
        convert(`${label}:currency_change`, value);
    }, [currency])

    return (
        <div className="convert__block">
            <input
                value={value}
                onChange={(e) => {
                    if((/^$|^[\d.]+$/).test(e.target.value)) {
                        setter(e.target.value);
                        convert(label, e.target.value);
                    }
                }}
                type="text" className="convert__input"/>
            <button
                onClick={() => setEditable(!editable)}
                className="convert__currency">{currency}</button>
            {editable? <CurrencyList label={label} trigger={setEditable}/> : ""}
        </div>
    )
}

export default ConvertBlock;