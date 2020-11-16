import React, {useState} from "react";
import {connect} from "react-redux";
import ConvertBlock from "../convertBlock/convertBlock";

import "./cryptoConvert.scss";

const CryptoConvert = ({data, firstCur, secondCur}) => {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");

    const convert = (emit, value) => {
        const usdPriceFirst = firstCur === "USD"? 1 : data.filter(el => el.CoinInfo.Name === firstCur)[0].RAW.USD.PRICE;
        const usdPriceSecond = secondCur === "USD"? 1 : data.filter(el => el.CoinInfo.Name === secondCur)[0].RAW.USD.PRICE;
        switch (emit) {
            case "first": {
                setSecond((+value * usdPriceFirst) / usdPriceSecond);
                break;
            }
            case "second": {
                setFirst( (+value * usdPriceSecond) / usdPriceFirst);
                break
            }
            case "first:currency_change" :{
                setFirst( (+second * usdPriceSecond) / usdPriceFirst);
                break;
            }
            case "second:currency_change" :{
                setSecond((+first * usdPriceFirst) / usdPriceSecond);
                break;
            }
            default: break;
        }
    }


    return (
        <div className="convert">
            <ConvertBlock convert={convert} value={first} setter={setFirst} label="first"/>
            <ConvertBlock convert={convert} value={second} setter={setSecond} label="second"/>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        firstCur: state.first,
        secondCur: state.second,
        data: state.data
    }
}

export default connect(mapStateToProps)(CryptoConvert);