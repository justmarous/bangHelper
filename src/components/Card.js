import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {pickClear, selectCard} from "../redux/drawerSlice";
import {deckLibrary} from "../services/deckLibrary"
import {CSSTransition} from 'react-transition-group';

function Card() {
    const card = useSelector(selectCard);
    const dispatch = useDispatch()


let containerStyle = {
        border: "solid 15px black",
        opacity: "0.3",
}


    let cardTitleStyle = {
        textAlign: "center",
        marginTop: "100px",
        fontSize: "40px"
    }


    let cardDescStyle= {
        margin: "30px",
        height: "300px",
        fontSize: "22px"
    }



    return (
        <CSSTransition
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>

        <div className={"card-body"} key={1} style={containerStyle} onClick={()=>dispatch(pickClear())}>
                <h1 style={cardTitleStyle}>{deckLibrary(card).name==="none" ? "" : deckLibrary(card).name}</h1>
                <p  style={cardDescStyle}>{deckLibrary(card).desc}</p>
        </div>

        </CSSTransition>
    );
}



export default Card;