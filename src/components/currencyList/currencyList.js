import React from "react";

import "./currencyList.scss";

const CurrencyList = ({trigger, value}) => {
    return (
        <ul className="currency-list">
            <li className="currency-list__item">BTC</li>
            <li
                onClick={() => {
                    value("usd");
                    trigger(false);
                }}
                className="currency-list__item">USD</li>
        </ul>
    )
};

export default CurrencyList;