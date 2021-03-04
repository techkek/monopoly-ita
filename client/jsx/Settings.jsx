import React from 'react';
import {gameService} from "./services/GameService";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faCog} from '@fortawesome/free-solid-svg-icons';

export default class Settings extends React.Component {
    state = {
        showSettings: false
    }
    saveGame = () => {

        const now = new Date();
        const fileName = 'MonopolyGame_' + now.getFullYear() + '-' + now.getMonth() + '-' + now.getDay() + '_' + now.getHours() + now.getMinutes() + now.getSeconds() + '.json';

        console.log('game file name', fileName);

        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
            game: this.props.game,
            logs: this.props.logs,
            chat: this.props.chat
        }));

        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", fileName);
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        this.setState({showSettings: false});
    }

    handleUpload = (e, element) => {
        if (confirm('Questo interromperà il gioco in corso e ripristinerà il salvataggio caricato. Se il salvataggio non funziona, è necessario creare una nuova partita.')) {

            var files = e.target.files;

            // we only deal with one file
            if (files.length === 1) {
                files[0].text().then(t => gameService.loadGame(JSON.parse(t)));
            }

            this.setState({showSettings: false});

            element.remove();
        }
    }

    loadGame = () => {
        console.log('loading game');
// Check for the various File API support.
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            console.log('loading game 2');
            // Great success! All the File APIs are supported.
            var upload = document.createElement('input');
            upload.setAttribute("type", "file");
            upload.addEventListener('change', (e) => this.handleUpload(e, upload));
            document.body.appendChild(upload); // required for firefox
            upload.click();
        } else {
            alert('Le File APIs non sono ben supportate nel tuo browser.');
        }
    }

    render() {
        return (<div className="game-settings">
            <FontAwesomeIcon icon={faCog} onClick={e => this.setState({showSettings: !this.state.showSettings})}/>
            {this.state.showSettings && <ul>
                <li onClick={this.saveGame}>Save game</li>
                <li onClick={this.loadGame}>Load game</li>
                <li onClick={this.props.showHelp}>Show help dialog</li>
            </ul>
            }
        </div>);
    }
}