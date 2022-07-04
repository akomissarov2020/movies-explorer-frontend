import React from 'react'
import './Preloader.css'

const Preloader = (props) => {

    return (
        <div className={(props.isLoading || props.errorFromServer.length > 0) ? "preloader" : "preloader preloader__hided"}>
            <div className="preloader__container">
                {props.isLoading && props.errorFromServer.length === 0  && <span className="preloader__round"></span>}
                {props.errorFromServer && <p className="preloader__error">{props.errorFromServer}</p>}
            </div>
        </div>
    )
};

export default Preloader
