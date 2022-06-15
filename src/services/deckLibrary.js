import React from 'react';
import cardLibrary from "../data/cardLibrary.json";


export function deckLibrary(props) {

    console.log(props)

    let pickedCardJson = cardLibrary.cardLibrary.filter((card)=> card.id === props)

    return {
        name: pickedCardJson[0].name,
        desc: pickedCardJson[0].desc
    };
}
