import React from 'react';
import {gameService} from "./services/GameService";

const Mortgage = (props) => {

    const mortgageValue = Math.floor(props.property.price / 2);
    const tenPercent = Math.ceil(mortgageValue * 0.1);
    const mortgageBuyout = mortgageValue + tenPercent;

    const canMortgage = gameService.canMortgage(props.property, props.game);
    const isOwner = props.property.owner === gameService.currentPlayer;

    const toggleMortgage = () => gameService.toggleMortgageProperty(props.property, props.type)

    return (<div>
        <hr/>
        <div>
            Ipoteca:
        </div>
        <div>
            Valore ipotecato: ${mortgageValue}
        </div>
        <div>
            Per togliere l'ipoteca: ${mortgageBuyout}
        </div>
        {canMortgage && <div>
            <label>
                <input type="checkbox" checked={props.property.mortgaged} onChange={toggleMortgage}/>
                Ipoteca
            </label>
        </div>}

        {!canMortgage && isOwner && <div>
            <small><em>Puoi ipotecare solo se non ci sono più case o alberghi in questo
                monopolio</em></small>
        </div>}
    </div>)

}

export default Mortgage;