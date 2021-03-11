import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandHoldingUsd} from "@fortawesome/free-solid-svg-icons";

export default class SuperTax extends React.Component{

    render() {
        return (<div className={"super-tax grid-area-"+this.props.position+" board-card " + this.props.boardPos}>
            <div className="title">Tassa di lusso</div>
            <div className="icon">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
            </div>
            <div className="price">Paga $200</div>
        </div>);
    }
}
