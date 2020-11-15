import React from "react";

import "./cryptoConvert.scss";

const CryptoConvert = () => {
    return (
        <div className="convert">
            <div className="convert__block">
                <input type="text" className="convert__input"/>
                <button className="convert__currency"/>
            </div>
            <div className="convert__block">
                <input type="text" className="convert__input"/>
                <button className="convert__currency"/>
            </div>
        </div>
    )
};

export default CryptoConvert;