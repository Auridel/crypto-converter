import React from "react";

import "./cryptoTable.scss";

const CryptoTable = () => {
    return (
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
                <tr className="crypto-table__row">
                    <td className="crypto-table__data"><img className="crypto__icon" src="https://www.cryptocompare.com/media/19633/btc.png" alt="crypto"/></td>
                    <td className="crypto-table__data">BTC</td>
                    <td className="crypto-table__data">Bitcoin</td>
                    <td className="crypto-table__data">15900.82</td>
                </tr>
            </tbody>
        </table>
    )
};

export default CryptoTable;