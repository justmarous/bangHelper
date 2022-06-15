import React, {useEffect} from 'react';
import Draggable from "react-draggable";
import {pickColour, pickNumber, selectCard, selectColour} from "../redux/drawerSlice";
import {useDispatch, useSelector} from "react-redux";

function Colours(props) {

    const dispatch = useDispatch()
    const currentColor = useSelector(selectColour)


    function handleClick(e, colour) {
        dispatch(pickColour(colour));
        document.querySelectorAll(".kolory div").forEach((e)=>{
            e.style.backgroundColor="#FFE"
        });
        e.target.style.backgroundColor = "lightskyblue"
    }


    return (
        <div>
            <div className="kolory">
                <div id="kier" onClick={(e) => handleClick(e, "kier")}><img src="../mycollection/png/003-heart.png"
                                                                            alt=""/></div>
                <div id="pik"  onClick={(e) => handleClick(e, "pik")}><img src="../mycollection/png/004-spades.png"
                                                                          alt=""/></div>
                <div id="karo" onClick={(e) => handleClick(e, "karo")}><img src="../mycollection/png/002-diamond.png"
                                                                            alt=""/></div>
                <div id="trefl" onClick={(e) => handleClick(e, "trefl")}><img src="../mycollection/png/005-clubs.png"
                                                                              alt="club"/></div>
            </div>

        </div>
    );
}

export default Colours;