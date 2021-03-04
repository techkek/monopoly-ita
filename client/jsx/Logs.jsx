import React from 'react';

export default class Logs extends React.Component {

    componentDidUpdate(prevProps) {
        const messageBody = document.getElementById('log-box');
        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    }
    render() {
        return (<div className="logs">
            <h3>Qui ci sono i log <small><a href="./logs.txt" target="_blank">Visualizza tutti i log</a></small></h3>
            <div id="log-box" className="text">
                {this.props.logs.map((l, index) => <p key={index}>{l}</p> )}
            </div>
        </div>)
    }
}
