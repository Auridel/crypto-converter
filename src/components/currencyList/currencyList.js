import React,  {useEffect, useRef} from "react";
import {connect, useDispatch} from "react-redux";
import {SET_FIRST, SET_SECOND} from "../../actions/actions";

import "./currencyList.scss";

const CurrencyList = ({trigger, data, label}) => {
    const dispatch = useDispatch();
    const listRef = useRef();

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        }
    })

    const handleClick = (e) => {
        const node = listRef.current;
        if(!node || !node.contains(e.target)) trigger(false);
    }

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
        <ul ref={listRef} className="currency-list">
            <li
                onClick={() => {
                    setData("USD");
                    trigger(false);
                }}
                className="currency-list__item">USD</li>
            {data.map(item =>
            <li
                key={item.CoinInfo.Id}
                onClick={() => {
                    setData(item.CoinInfo.Name);
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