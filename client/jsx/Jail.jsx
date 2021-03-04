import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBorderAll} from "@fortawesome/free-solid-svg-icons";

export default class Jail extends React.Component {

    render() {
        return (<div className={"jail grid-area-10 corner-card "}>
            <div className="cell">
                <FontAwesomeIcon icon={faBorderAll}/>
            </div>
            <div className="visit-left">Transito</div>
            <div className="visit-bottom">Transito</div>
            <div style={{gridArea: 'e'}}></div>
        </div>);
    }
}
