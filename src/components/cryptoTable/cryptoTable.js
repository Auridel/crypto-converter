import React from "react";

import "./cryptoTable.scss";

const CryptoTable = ({data}) => {


    return (
        data?
        <table className="crypto-table">
            <thead>
                <tr className="crypto-table__row">
                    <td className="crypto-table__data head"/>
                    <td className="crypto-table__data head">Name</td>
                    <td className="crypto-table__data head">Full name</td>
                    <td className="crypto-table__data head">Price</td>
                </tr>
            </thead>
            <tbody>
            {data.map(item =>
                <tr key={item.CoinInfo.Id} className="crypto-table__row">
                    <td className="crypto-table__data"><img className="crypto__icon" src={`https://www.cryptocompare.com/${item.CoinInfo.ImageUrl}`} alt="crypto"/></td>
                    <td className="crypto-table__data">{item.CoinInfo.Name}</td>
                    <td className="crypto-table__data">{item.CoinInfo.FullName}</td>
                    <td className="crypto-table__data">{item.RAW.USD.PRICE}</td>
                </tr>)}
            </tbody>
        </table>
            : ""
    )
};

export default CryptoTable;