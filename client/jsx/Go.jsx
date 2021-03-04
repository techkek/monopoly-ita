import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default class Go extends React.Component{

    render() {
        return (<div className={"go corner-card grid-area-0 " + this.props.boardPos}>
            <div className="container">
                <div>Ritirate al passaggio $200</div>
                <div>Via!</div>
                <div className="icon">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </div>
            </div>
        </div>);
    }
}
