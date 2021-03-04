import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";

export default class Imprevisti extends React.Component {

    render() {
        return (<div className={"imprevisti board-card grid-area-"+this.props.position+" " + this.props.boardPos}>
            <div className="title">Imprevisti</div>
            <div className="icon body">
                <FontAwesomeIcon icon={faQuestion} />
            </div>
        </div>);
    }
}
