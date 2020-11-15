import React, {useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import {ASK_DATA} from "../../actions/actions";
import CryptoTable from "../cryptoTable/cryptoTable";
import CryptoConvert from "../cryptoConvert/cryptoConvert";

import "./app.scss";

const App = ({data, loaded}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if(!loaded) dispatch(ASK_DATA());
    })

    return (
        <div className="container">
            <CryptoTable data={data}/>
            <CryptoConvert/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
        loaded: state.loaded
    }
}

export default connect(mapStateToProps)(App);