import React from 'react';
import {useSelector} from "react-redux";
import {selectColour, selectNumber} from "../redux/drawerSlice";
import Colours from "./Colours";
import Numbers from "./Numbers";
import Card from "./Card";

function CardPicker() {
    const colour = useSelector(selectColour)
    const number = useSelector(selectNumber)

    return (
        <div>
            {(number!==null && colour!==null) ?  <Card/> : <><Colours/><Numbers/></> }
        </div>
    )
}



export default CardPicker;
