import React from 'react';
import Dialog from "./components/Dialog";

export default class HelpDialog extends React.Component {

    render() {
        return (<Dialog dismiss={this.props.dismiss} actions={[{name: 'Chiudi', click: this.props.dismiss}]}>
            <h1>Monopoly</h1>
            <p>Benvenuto nel Monopoly di kek!</p>
            <p>Questo gioco è pensato per essere giocato allo stesso modo del gioco da tavolo, il che significa che se tiri i dadi, tu
                devi spostare il tuo personaggio. Se passi attraverso il via, il responsabile della banca deve darti
                i $200. Ciò significa anche che puoi avere le tue regole e le offerte che vuoi.</p>
            <p>
                Puoi apportare modifiche con gli altri giocatori. Se acquisti qualcosa, il responsabile della banca deve
                dartelo e tu devi inviare il denaro alla banca.
            </p>

            <p>Ogni azione eseguita da un giocatore viene registrata nel pannello "Log" in modo da non perderti
                nulla.</p>
        </Dialog>);
    }
}
