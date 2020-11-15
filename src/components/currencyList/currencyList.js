import React from "react";
import {connect, useDispatch} from "react-redux";
import {SET_FIRST, SET_SECOND} from "../../actions/actions";

import "./currencyList.scss";

const CurrencyList = ({trigger, value, data, label}) => {
    const dispatch = useDispatch();

    const setData = (data) => {
        switch (label) {
            case "first": {
                dispatch(SET_FIRST(data));
                break;
            }
            case "second": {
                dispatch(SET_SECOND(data))
                break;
            }
            default: break;
        }
    }

    return (
        <ul className="currency-list">
            <li
                onClick={() => {
                    value("USD");
                    setData(null);
                    trigger(false);
                }}
                className="currency-list__item">USD</li>
            {data.map(item =>
            <li
                key={item.CoinInfo.Id}
                onClick={() => {
                    value(item.CoinInfo.Name);
                    setData(item.CoinInfo.Id);
                    trigger(false);
                }}
                className="currency-list__item">{item.CoinInfo.Name}</li>
            )}
        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(CurrencyList);