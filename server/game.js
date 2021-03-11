const fs = require('fs');

const OUT_OF_JAIL = "Esci di prigione gratis. Questa carta può essere usata, scambiata o venduta. Il suo valore è $50.";

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

class GameService {
    logs = [];
    chat = [];
    newGame = () => {
        fs.writeFileSync(this.logFile, '');
        fs.writeFileSync(this.chatFile, '');
        return {
            dice: [3, 6],
            rollingDice: false,
            started: false,
            players: [{
                id: 1,
                name: 'Banca',
                token: 'dollar-sign',
                notes: {
                    500: 30,
                    100: 30,
                    50: 30,
                    20: 30,
                    10: 30,
                    5: 30,
                    1: 30
                },
                housing: {
                    hotels: 12,
                    houses: 32
                },
            }],
            deeds: {
                utilities: [
                    {
                        position: 12,
                        owner: "1",
                        title: "Società elettrica",
                        type: "electricity",
                        description: "Se si ha una delle società, l'affitto è 4 volte l'importo mostrato sui dadi. Se si hanno entrambe le società, l'affitto è 10 volte l'importo mostrato sui dadi.",
                        price: 150,
                        mortgaged: false
                    },
                    {
                        position: 28,
                        owner: "1",
                        type: "water",
                        title: "Società dell'acqua potabile",
                        description: "Se si ha una delle società, l'affitto è 4 volte l'importo mostrato sui dadi. Se si hanno entrambe le società, l'affitto è 10 volte l'importo mostrato sui dadi.",
                        price: 150,
                        mortgaged: false
                    }
                ],
                trainStations: [
                    {
                        position: 5,
                        owner: "1",
                        title: "Stazione Sud",
                        rent: {
                            "Rendita": '$25',
                            "Se si possiedono due stazioni": "$50",
                            "Se si possiedono tre stazioni": "$100",
                            "Se si possiedono quattro stazioni": "$200",
                        },
                        price: 200,
                        mortgaged: false
                    },
                    {
                        position: 15,
                        owner: "1",
                        title: "Stazione Ovest",
                        rent: {
                            "Rendita": '$25',
                            "Se si possiedono due stazioni": "$50",
                            "Se si possiedono tre stazioni": "$100",
                            "Se si possiedono quattro stazioni": "$200",
                        },
                        price: 200,
                        mortgaged: false
                    },
                    {
                        position: 25,
                        owner: "1",
                        title: "Stazione Nord",
                        rent: {
                            "Rendita": '$25',
                            "Se si possiedono due stazioni": "$50",
                            "Se si possiedono tre stazioni": "$100",
                            "Se si possiedono quattro stazioni": "$200",
                        },
                        price: 200,
                        mortgaged: false
                    },
                    {
                        position: 35,
                        owner: "1",
                        title: "Stazione Sud",
                        rent: {
                            "Rendita": '$25',
                            "Se si possiedono due stazioni": "$50",
                            "Se si possiedono tre stazioni": "$100",
                            "Se si possiedono quattro stazioni": "$200",
                        },
                        price: 200,
                        mortgaged: false
                    },
                ],
                regular: [
                    {
                        position: 37,
                        owner: "1",
                        title: "Viale dei giardini",
                        color: "#1a2596",
                        rent: {
                            "Rendita": "$35",
                            "Con il monopolio": "$70",
                            "Con una casa": "$175",
                            "Con due case": "$500",
                            "Con tre case": "$1100",
                            "Con quattro case": "$1300",
                            "Con albergo": "$1500",
                        },
                        cost: {
                            "Casa": "$200 ciascuna",
                            "Albergo": "$200 ciascuna"
                        },
                        houses: 0,
                        hotel: 0,
                        price: 350,
                        mortgaged: false
                    },
                    {
                        position: 39,
                        owner: "1",
                        title: "Parco della vittoria",
                        color: "#1a2596",
                        rent: {
                            "Rendita": "$50",
                            "Con il monopolio": "$100",
                            "Con una casa": "$200",
                            "Con due case": "$600",
                            "Con tre case": "$1400",
                            "Con quattro case": "$1700",
                            "Con albergo": "$2000",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$200 ciascuna",
                            "Albergo": "$200 ciascuna"
                        },
                        price: 400,
                        mortgaged: false
                    },
                    {
                        position: 31,
                        owner: "1",
                        title: "Via Roma",
                        color: "#008e04",
                        rent: {
                            "Rendita": "$26",
                            "Con il monopolio": "$52",
                            "Con una casa": "$130",
                            "Con due case": "$390",
                            "Con tre case": "$900",
                            "Con quattro case": "$1100",
                            "Con albergo": "$1275",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$200 ciascuna",
                            "Albergo": "$200 ciascuna"
                        },
                        price: 300,
                        mortgaged: false
                    },
                    {
                        position: 34,
                        owner: "1",
                        title: "Largo Augusto",
                        color: "#008e04",
                        rent: {
                            "Rendita": "$28",
                            "Con il monopolio": "$56",
                            "Con una casa": "$150",
                            "Con due case": "$450",
                            "Con tre case": "$1000",
                            "Con quattro case": "$1200",
                            "Con albergo": "$1400",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$200 ciascuna",
                            "Albergo": "$200 ciascuna"
                        },
                        price: 320,
                        mortgaged: false
                    },
                    {
                        position: 32,
                        owner: "1",
                        title: "Corso impero",
                        color: "#008e04",
                        rent: {
                            "Rendita": "$26",
                            "Con il monopolio": "$52",
                            "Con una casa": "$130",
                            "Con due case": "$390",
                            "Con tre case": "$900",
                            "Con quattro case": "$1100",
                            "Con albergo": "$1275",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$200 ciascuna",
                            "Albergo": "$200 ciascuna"
                        },
                        price: 300,
                        mortgaged: false
                    },
                    {
                        position: 26,
                        owner: "1",
                        title: "Viale Costantino",
                        color: "#d6d105",
                        rent: {
                            "Rendita": "$22",
                            "Con il monopolio": "$44",
                            "Con una casa": "$110",
                            "Con due case": "$330",
                            "Con tre case": "$800",
                            "Con quattro case": "$975",
                            "Con albergo": "$1150",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$150 ciascuna",
                            "Albergo": "$150 ciascuna"
                        },
                        price: 260,
                        mortgaged: false
                    },
                    {
                        position: 27,
                        owner: "1",
                        title: "Viale Traiano",
                        color: "#d6d105",
                        rent: {
                            "Rendita": "$22",
                            "Con il monopolio": "$44",
                            "Con una casa": "$110",
                            "Con due case": "$330",
                            "Con tre case": "$800",
                            "Con quattro case": "$975",
                            "Con albergo": "$1150",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$150 ciascuna",
                            "Albergo": "$150 ciascuna"
                        },
                        price: 260,
                        mortgaged: false
                    },
                    {
                        position: 29,
                        owner: "1",
                        title: "Piazza Giulio Cesare",
                        color: "#d6d105",
                        rent: {
                            "Rendita": "$24",
                            "Con il monopolio": "$48",
                            "Con una casa": "$120",
                            "Con due case": "$360",
                            "Con tre case": "$850",
                            "Con quattro case": "$1025",
                            "Con albergo": "$1200",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$150 ciascuna",
                            "Albergo": "$150 ciascuna"
                        },
                        price: 280,
                        mortgaged: false
                    },
                    {
                        position: 23,
                        owner: "1",
                        title: "Corso Magellano",
                        color: "#9f0108",
                        rent: {
                            "Rendita": "$18",
                            "Con il monopolio": "$36",
                            "Con una casa": "$90",
                            "Con due case": "$250",
                            "Con tre case": "$700",
                            "Con quattro case": "$875",
                            "Con albergo": "$1050",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$150 ciascuna",
                            "Albergo": "$150 ciascuna"
                        },
                        price: 220,
                        mortgaged: false
                    },
                    {
                        position: 21,
                        owner: "1",
                        title: "Via Marco Polo",
                        color: "#9f0108",
                        rent: {
                            "Rendita": "$18",
                            "Con il monopolio": "$36",
                            "Con una casa": "$90",
                            "Con due case": "$250",
                            "Con tre case": "$700",
                            "Con quattro case": "$875",
                            "Con albergo": "$1050",
                        },
                        cost: {
                            "Casa": "$150 ciascuna",
                            "Albergo": "$150 ciascuna"
                        },
                        houses: 0,
                        hotel: 0,
                        price: 220,
                        mortgaged: false
                    },
                    {
                        position: 24,
                        owner: "1",
                        title: "Largo Colombo",
                        color: "#9f0108",
                        rent: {
                            "Rendita": "$20",
                            "Con il monopolio": "$40",
                            "Con una casa": "$100",
                            "Con due case": "$300",
                            "Con tre case": "$750",
                            "Con quattro case": "$925",
                            "Con albergo": "$1100",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$150 ciascuna",
                            "Albergo": "$150 ciascuna"
                        },
                        price: 240,
                        mortgaged: false
                    },
                    {
                        position: 16,
                        title: "Via Verdi",
                        color: "#d68000",
                        owner: "1",
                        rent: {
                            "Rendita": "$14",
                            "Con il monopolio": "$28",
                            "Con una casa": "$70",
                            "Con due case": "$200",
                            "Con tre case": "$550",
                            "Con quattro case": "$750",
                            "Con albergo": "$950",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$100 ciascuna",
                            "Albergo": "$100 ciascuna"
                        },
                        price: 180,
                        mortgaged: false
                    },
                    {
                        position: 18,
                        title: "Coso Raffaello",
                        color: "#d68000",
                        owner: "1",
                        rent: {
                            "Rendita": "$14",
                            "Con il monopolio": "$28",
                            "Con una casa": "$70",
                            "Con due case": "$200",
                            "Con tre case": "$550",
                            "Con quattro case": "$750",
                            "Con albergo": "$950",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$100 ciascuna",
                            "Albergo": "$100 ciascuna"
                        },
                        price: 180,
                        mortgaged: false
                    },
                    {
                        position: 19,
                        title: "Piazza Dante",
                        color: "#d68000",
                        owner: "1",
                        rent: {
                            "Rendita": "$16",
                            "Con il monopolio": "$32",
                            "Con una casa": "$80",
                            "Con due case": "$220",
                            "Con tre case": "$600",
                            "Con quattro case": "$800",
                            "Con albergo": "$1000",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$100 ciascuna",
                            "Albergo": "$100 ciascuna"
                        },
                        price: 200,
                        mortgaged: false
                    },
                    {
                        position: 13,
                        title: "Corso Ateneo",
                        color: "#930086",
                        owner: "1",
                        rent: {
                            "Rendita": "$10",
                            "Con il monopolio": "$20",
                            "Con una casa": "$50",
                            "Con due case": "$150",
                            "Con tre case": "$450",
                            "Con quattro case": "$625",
                            "Con albergo": "$750",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$100 ciascuna",
                            "Albergo": "$100 ciascuna"
                        },
                        price: 140,
                        mortgaged: false
                    },
                    {
                        position: 11,
                        title: "Via Accademia",
                        color: "#930086",
                        owner: "1",
                        rent: {
                            "Rendita": "$10",
                            "Con il monopolio": "$20",
                            "Con una casa": "$50",
                            "Con due case": "$150",
                            "Con tre case": "$450",
                            "Con quattro case": "$625",
                            "Con albergo": "$750",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$100 ciascuna",
                            "Albergo": "$100 ciascuna"
                        },
                        price: 140,
                        mortgaged: false
                    },
                    {
                        position: 14,
                        title: "Piazza Università",
                        color: "#930086",
                        owner: "1",
                        rent: {
                            "Rendita": "$12",
                            "Con il monopolio": "$24",
                            "Con una casa": "$60",
                            "Con due case": "$180",
                            "Con tre case": "$500",
                            "Con quattro case": "$700",
                            "Con albergo": "$900",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$100 ciascuna",
                            "Albergo": "$100 ciascuna"
                        },
                        price: 160,
                        mortgaged: false
                    },
                    {
                        position: 6,
                        title: "Bastioni Gran Sasso",
                        color: "#6ba9a5",
                        owner: "1",
                        rent: {
                            "Rendita": "$6",
                            "Con il monopolio": "$12",
                            "Con una casa": "$30",
                            "Con due case": "$90",
                            "Con tre case": "$270",
                            "Con quattro case": "$400",
                            "Con albergo": "$550",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$50 ciascuna",
                            "Albergo": "$50 ciascuna"
                        },
                        price: 100,
                        mortgaged: false
                    },
                    {
                        position: 8,
                        title: "Viale Monterosa",
                        color: "#6ba9a5",
                        owner: "1",
                        rent: {
                            "Rendita": "$6",
                            "Con il monopolio": "$12",
                            "Con una casa": "$30",
                            "Con due case": "$90",
                            "Con tre case": "$270",
                            "Con quattro case": "$400",
                            "Con albergo": "$550",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$50 ciascuna",
                            "Albergo": "$50 ciascuna"
                        },
                        price: 100,
                        mortgaged: false
                    },
                    {
                        position: 9,
                        title: "Viale Vesuvio",
                        color: "#6ba9a5",
                        owner: "1",
                        rent: {
                            "Rendita": "$8",
                            "Con il monopolio": "$16",
                            "Con una casa": "$40",
                            "Con due case": "$100",
                            "Con tre case": "$300",
                            "Con quattro case": "$450",
                            "Con albergo": "$600",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$50 ciascuna",
                            "Albergo": "$50 ciascuna"
                        },
                        price: 120,
                        mortgaged: false
                    },
                    {
                        position: 1,
                        title: "Vicolo Corto",
                        color: "#614901",
                        owner: "1",
                        rent: {
                            "Rendita": "$2",
                            "Con il monopolio": "$4",
                            "Con una casa": "$10",
                            "Con due case": "$30",
                            "Con tre case": "$90",
                            "Con quattro case": "$160",
                            "Con albergo": "$250",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$50 ciascuna",
                            "Albergo": "$50 ciascuna"
                        },
                        price: 60,
                        mortgaged: false
                    },
                    {
                        position: 3,
                        title: "Vicolo Stretto",
                        color: "#614901",
                        owner: "1",
                        rent: {
                            "Rendita": "$4",
                            "Con il monopolio": "$8",
                            "Con una casa": "$20",
                            "Con due case": "$60",
                            "Con tre case": "$180",
                            "Con quattro case": "$320",
                            "Con albergo": "$450",
                        },
                        houses: 0,
                        hotel: 0,
                        cost: {
                            "Casa": "$50 ciascuna",
                            "Albergo": "$50 ciascuna"
                        },
                        price: 60,
                        mortgaged: false
                    },
                ],
            },
            cards: {
                imprevisti: {
                    available: shuffle([
                        "Vai al via, prendendo $200!",
                        "Buone notizie! È morto un tuo parente, ti ha dato $100 in eredità!",
                        "Sei stato beccato nella rapina alla banca. Vai in prigione, senza passare dal via e prendere i $200.",
                        "Sono maturate le tue azioni sul Gamestop! Collezioni $100",
                        "Ti è arrivato dopo 3 anni un rimborso dalla Cina. Collezioni $20",
                        "Devi pagare l'IMU, sborsi $50",
                        "Sei finito in ospedale, hai bevuto troppo, pensi di poter acquistare tutto con poche centinaia di dollari... Sborsi $100",
                        "Ti hanno chiamato per una consulenza in uno dei tuoi hotel, e ti han dato $25. Perchè? Non lo so",
                        OUT_OF_JAIL,
                        "Hai rubato dal tizio che da i soldi per il via! Prendi $200",
                        "AUGURI! È IL TUO COMPLEANNO! Gli altri giocatori devono darti $10 o una proprietà. A loro la scelta",
                        "Premio di anzianità: $100",
                        "Ti sei accorto di avere una azione su una società e la ritiri: $50. Ma davvero te ne accorgi solo ora?",
                        "Tasse del dottore! Paghi 50$.",
                        "Vai a Via della Vittoria, ma solo se ci sono case o alberghi."
                    ]),
                    used: [],
                },
                community: {
                    available: shuffle([
                        OUT_OF_JAIL,
                        "Sei stato beccato nella rapina alla banca. Vai in prigione, senza passare dal via e prendere i $200.",
                        "Vai alla prossima stazione, e prega non sia di nessuno.",
                        "Vai a Viale dei Giardini, e prega non sia di nessuno. E che non ci sia un bell'albergo.",
                        "Vai alla prossima stazione, e prega non sia di nessuno.",
                        "Sei stato eletto rappresentante degli studenti, gli altri giocatori ti devono $50.",
                        "Vai a Largo Colombo. Se passi dal via, colleziona 200$.",
                        "Dato che stai perdendo, prendi $150. Non stai perdendo, dici? Vedremo.",
                        "Vai al Via e prenditi i 200$",
                        "Prendi una birra o due a Vicolo Stretto e scegli un giocatore che la prenda con te. Se passi dal via, collezioni 200$",
                        "Ti hanno beccato a evadere le tasse, paga $15",
                        "Vai alla prossima società, e se è di qualcun altro tira il dado, e buona fortuna.",
                        "Ad un vandalo stanno antipatiche le tue case e i tuoi alberghi: paga 25$ per ogni casa e 100$ per ogni albergo per sistemarle",
                        "Vai indietro di tre spazi se il giorno del mese è pari, altrimenti torna indietro di 7.",
                        "Vai vicino ai carcerati e ai laureati in Via Accademia. Se passi dal via, prendi $200.",
                        "Hai scommesso 100 con la banca 100$ nel caso in cui qualcuno entro due turni passi sul Via. Se vinci, vinci 200$, se perdi perdi 100$."
                    ]),
                    used: []

                }

            }
        }
    }

    processCommand = (command, params, from) => {
        const player = this.getPlayerFromId(from);
        switch (command) {
            case 'rollDice':
                this.rollDice(0, this.randomInt(10) + 5, from);
                break;
            case 'newPlayer':
                this.addNewPlayer(params);
                break;
            case 'sendMoney':
                this.transferNotes(params.from, params.to, params.notes);
                break;
            case 'movePlayer':
                this.movePlayer(params.id, params.x, params.y);
                break;
            case 'moveFinished':
                this.sendLog(this.getPlayerFromId(from).name + " ha mosso il giocatore " + params.target);
                break;
            case 'sendDeed':
                this.transferDeed(params.street, params.type, params.to, from);
                break;
            case 'addHouse':
                this.addHouse(params.streetTitle, player);
                break;
            case 'removeHouse':
                this.removeHouse(params.streetTitle, player);
                break;
            case 'addHotel':
                this.addHotel(params.streetTitle, player);
                break;
            case 'removeHotel':
                this.removeHotel(params.streetTitle, player);
                break;
            case 'drawCard':
                this.drawCard(params.type, player);
                break;
            case 'loadGame':
                this.loadGame(params.game, player);
                break;
            case 'chat':
                this.addToChat(params.message, player);
                break;
            case 'mortgage':
                this.toggleMortgageDeed(params.title, params.type, player);
                break;
            case 'useOutOfJailCard':
                this.useOutOfJailCard(player);
                break;
            case 'transferOutOfJailCard':
                this.transferOutOfJailCard(player, params.to);
                break;
        }

        return {type: 'game', game: this.game};
    }

    transferOutOfJailCard = (player, to) => {
        const toPlayer = this.getPlayerFromId(to);
        if (!toPlayer) {
            this.sendLog(to + " non esiste");
            return;
        }

        if (player.outOfJail.community > 0) {
            player.outOfJail.community--;
            toPlayer.outOfJail.community++;
            this.sendLog(player.name + " invia una carta 'Esci di prigione' a " + toPlayer.name);
        } else if (player.outOfJail.imprevisti > 0) {
            player.outOfJail.imprevisti--;
            toPlayer.outOfJail.imprevisti++;
            this.sendLog(player.name + " invia una carta 'Esci di prigione' a " + toPlayer.name);
        } else {
            this.sendLog(player.name + " non ha una carta 'Esci di prigione'");
        }

    }

    useOutOfJailCard = (player) => {
        if (player.outOfJail.community > 0) {
            player.outOfJail.community--;
            this.game.cards.community.used.push(OUT_OF_JAIL);
            this.sendLog(player.name + " ha usato una carta 'Esci di prigione' ");
        } else if (player.outOfJail.imprevisti > 0) {
            player.outOfJail.imprevisti--;
            this.game.cards.imprevisti.used.push(OUT_OF_JAIL);
            this.sendLog(player.name + " ha usato una carta 'Esci di prigione'");
        } else {
            this.sendLog(player.name + " non ha una carta 'Esci di prigione'");
        }
    }

    loadGame = (game, player) => {
        //removing keys that are not supposed to exist
        this.sendLog(player.name + ' sta caricando un salvataggio');
        Object.keys(game.game).forEach(k => {
            if (!this.game[k]) {
                delete game.game[k];
            }
        });

        this.game = {...this.newGame(), ...game.game};
        this.logs = game.logs || [];
        this.chat = game.chat || [];
        this.ws.broadcast(JSON.stringify({type: 'newGame', game: this.game}));
    }

    toggleMortgageDeed = (title, type, from) => {
        const deed = this.game.deeds[type].find(s => s.title === title);

        let canMortgage = this.canMortgage(deed, from);
        console.log('Can mortgage?', canMortgage);
        if (canMortgage) {
            deed.mortgaged = !deed.mortgaged;
            this.sendLog(from.name + " ha" + (deed.mortgaged ? "" : "dis") + "ipotecato " + deed.title);
        } else {
            this.sendLog(from.name + " non può ipotecare questa proprietà, o perché non ne è il properietario o perché ci sono case o alberghi sul monopolio,");
        }

    }

    canMortgage = (deed, user) => {
        console.log('can mortgage', deed, user);
        if (deed.owner !== user.id) {
            return false;
        }

        // it's a street, we need to check if there any houses left on the street of the same colors
        if (deed.color) {
            return this.game.deeds.regular.filter(d => d.color === deed.color)
                .every(d => d.houses === 0 && d.hotel === 0);
        } else {
            return true;
        }

    }

    drawCard = (type, player) => {
        const cards = this.game.cards[type];

        if (cards.available.length === 0) {
            cards.available = shuffle(cards.used);
            cards.used = [];
            this.sendLog("Non ci sono più carte " + type + ", sto mescolando le vecchie carte");
        }

        const picked = cards.available.pop();

        if (picked === OUT_OF_JAIL) {
            player.outOfJail[type]++;
        } else {
            cards.used.push(picked);
        }

        this.sendLog(player.name + " draw  " + type + " card \"" + picked + "\"");
        this.ws.broadcast(JSON.stringify({type: 'cardDrawn', card: picked, cardType: type, player: player}));

    }

    canBuyHouse = (street, player) => {
        // get total of house of same color
        return this.game.deeds.regular.filter(s => street.color === s.color)
            .every(s => s.owner == player.id);

    }

    addHouse = (title, player) => {

        const street = this.game.deeds.regular.find(s => s.title === title);
        let bank = this.game.players.find(p => p.id == 1);
        const availableHouses = bank.housing.houses;

        if (!this.canBuyHouse(street, player)) {
            this.sendLog(player.name + " is not allowed to add houses to " + street.title);
            return;
        }

        if (player.id != street.owner) {
            this.sendLog(player.name + " is not the owner of " + street.title);
            return;
        }
        if (street.hotel === 1) {
            this.sendLog(street.title + " already has a hotel");
            return;
        }

        if (street.houses === 4) {
            this.sendLog(street.title + " already has 4 houses");
            return;
        }

        if (availableHouses > 0) {
            street.houses++;
            bank.housing.houses--;
            this.sendLog(player.name + " added one house to " + title);
            this.sendLog("Bank balance: Houses: " + bank.housing.houses + ", Hotels: " + bank.housing.hotels);
        } else {
            this.sendLog("No more houses in the bank");
        }

    }

    removeHouse = (title, player) => {

        const street = this.game.deeds.regular.find(s => s.title === title);
        let bank = this.game.players.find(p => p.id == 1);
        const availableHouses = bank.housing.houses;
        if (!this.canBuyHouse(street, player)) {
            this.sendLog(player.name + " is not allowed to add houses to " + street.title);
            return;
        }

        if (player.id != street.owner) {
            this.sendLog(player.name + " is not the owner of " + street.title);
            return;
        }

        if (street.houses === 0) {
            this.sendLog(street.title + " as no more houses to remove");
            return;
        }

        street.houses--;
        bank.housing.houses++;
        this.sendLog(player.name + " removed one house from " + title);
        this.sendLog("Bank balance: Houses: " + bank.housing.houses + ", Hotels: " + bank.housing.hotels);

    }

    addHotel = (title, player) => {

        const street = this.game.deeds.regular.find(s => s.title === title);
        let bank = this.game.players.find(p => p.id == 1);
        const availableHotels = bank.housing.hotels;
        if (!this.canBuyHouse(street, player)) {
            this.sendLog(player.name + " is not allowed to add houses to " + street.title);
            return;
        }

        if (player.id != street.owner) {
            this.sendLog(player.name + " is not the owner of " + street.title);
            return;
        }

        if (street.houses < 4) {
            this.sendLog(street.title + " needs 4 houses to buy a hotel");
            return;
        }

        if (availableHotels > 0) {
            bank.housing.houses += street.houses;
            bank.housing.hotels--;
            street.hotel++;
            street.houses = 0;
            this.sendLog(player.name + " added one hotel to " + title);
            this.sendLog("Bank balance: Houses: " + bank.housing.houses + ", Hotels: " + bank.housing.hotels);
        } else {
            this.sendLog("Non ci sono più hotel nella banca.");
        }

    }

    removeHotel = (title, player) => {

        const street = this.game.deeds.regular.find(s => s.title === title);
        let bank = this.game.players.find(p => p.id == 1);
        const availableHotels = bank.housing.hotels;
        if (!this.canBuyHouse(street, player)) {
            this.sendLog(player.name + " non ha il permesso di costruire case su " + street.title);
            return;
        }

        if (player.id != street.owner) {
            this.sendLog(player.name + " non è il proprietario di " + street.title);
            return;
        }

        if (street.hotel === 0) {
            this.sendLog(street.title + " non ha più hotel da rimuovere");
            return;
        }

        street.hotel--;
        bank.housing.hotels++;
        this.sendLog(player.name + " ha tolto un hotel da " + title);
        this.sendLog("Bilancio della banca: Case: " + bank.housing.houses + ", Hotel: " + bank.housing.hotels);

    }

    transferDeed = (title, type, to, from) => {
        const owner = this.getPlayerFromId(this.game.deeds[type].find(s => s.title === title).owner);
        const toUser = this.getPlayerFromId(to);
        const deed = this.game.deeds[type].find(s => s.title === title);
        console.log('transfer deed:', deed);
        if (owner.id !== toUser.id) {

            // sending back to the bank, we give back the houses to the bank
            if (toUser.id === 1) {
                const houses = deed.houses;
                const hotel = deed.hotel;
                toUser.housing.hotels = toUser.housing.hotels + hotel;
                toUser.housing.houses = toUser.housing.houses + houses;
                deed.hotel = 0;
                deed.houses = 0;
                deed.mortgaged = false;
            }

            deed.owner = toUser.id;

            this.game.deeds[type].sort((s1, s2) => s2.position - s1.position);

            this.sendLog(this.getPlayerFromId(from).name + " traferito " + title + " da " + owner.name + " a " + toUser.name);

        } else {
            this.sendLog(title + " non può essere inviata al corrente proprietario");
        }
    }

    movePlayer = (playerId, x, y) => {
        const player = this.getPlayerFromId(playerId);
        player.x = x;
        player.y = y;
    }

    addNewPlayer = (player) => {
        player.notes = {
            500: 0,
            100: 0,
            50: 0,
            20: 0,
            10: 0,
            5: 0,
            1: 0
        };
        player.x = 200 + 40 * this.game.players.length;
        player.y = 200;
        player.outOfJail = {
            imprevisti: 0,
            community: 0,
        }

        this.game.players.push(player);

        this.transferNotes(1, player.id, {
            1: 5,
            5: 1,
            10: 2,
            20: 1,
            50: 1,
            100: 4,
            500: 2,
        });

    }

    getPlayerFromId = (id) => {
        return this.game.players.find(p => p.id == id);
    }

    calculateNotesSum = (notes) => {
        let sum = 0;

        Object.keys(notes).forEach(k => {
            sum += k * notes[k];
        });

        return sum;
    }

    transferNotes(from, to, notes) {
        const fromPlayer = this.getPlayerFromId(from);
        const toPlayer = this.getPlayerFromId(to);

        Object.keys(notes).forEach(k => {
            fromPlayer.notes[k] = fromPlayer.notes[k] - notes[k];
            toPlayer.notes[k] = toPlayer.notes[k] + notes[k];
        });

        const sum = this.calculateNotesSum(notes);
        const fromNewSum = this.calculateNotesSum(fromPlayer.notes);
        const toNewSum = this.calculateNotesSum(toPlayer.notes);

        const logLine = fromPlayer.name + " sent $" + sum + " to " + toPlayer.name;
        this.sendLog(logLine);
        this.sendLog(" nuovo bilancio di" + fromPlayer.name + ': $' + fromNewSum);
        this.sendLog(" nuovo bilancio di" + toPlayer.name + ': $' + toNewSum);
    }

    randomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    sendToWs = () => {
        this.ws.broadcast(JSON.stringify({type: 'game', game: this.game}));
    }

    sendLog = (message) => {
        const date = new Date();
        message = "[" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + message;
        this.logs.push(message);
        fs.appendFileSync(this.logFile, message + '\n', 'utf8');

        if (this.logs.length > 200) {
            this.logs.shift();
        }

        this.ws.broadcast(JSON.stringify({type: 'log', message: this.logs}));
    }

    addToChat = (message, player) => {
        const date = new Date();
        message = "[" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] " + player.name + ": " + message;
        message.replace('<', '&lt;').replace('>', '&gt;');
        fs.appendFileSync(this.chatFile, message + '\n', 'utf8');
        this.chat.push(message);

        if (this.chat.length > 200) {
            this.chat.shift();
        }

        this.ws.broadcast(JSON.stringify({type: 'chat', message: this.chat}));
    }

    rollDice = (times, max, from) => {
        const player = this.getPlayerFromId(from).name;
        if (times === 0 && this.game.rollingDice === true) {
            return;
        }
        if (times === 0) {
            this.game.rollingDice = true;
            this.sendToWs();
            this.sendLog(player + ' ha tirato il dado!');
        }

        this.game.dice[0] = this.randomInt(6) + 1;
        this.game.dice[1] = this.randomInt(6) + 1;

        this.sendToWs();

        if (times < max) {

            setTimeout(() => this.rollDice(times + 1, max, from)
                , Math.floor(Math.random() * Math.floor(250)) + 50)
        } else {
            this.game.rollingDice = false;
            this.sendToWs();
            this.sendLog(player + ' rolled ' + this.game.dice[0] + " and " + this.game.dice[1] + "!");
        }

    }

    logFile = './static/logs.txt';
    chatFile = './static/chat.txt';
    game = this.newGame();
    ws = undefined;

}

exports
    .gameService = new GameService();
