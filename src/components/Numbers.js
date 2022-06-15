import React, {useEffect} from 'react';
import Draggable from "react-draggable";
import {useDispatch, useSelector} from "react-redux";
import {pickColour, pickedCard, pickNumber, selectColour, selectNumber} from "../redux/drawerSlice";

export function Numbers(props) {
    const dispatch = useDispatch()
    const number = useSelector(selectNumber)


    function handleClick(e, number) {
        dispatch(pickNumber(number));
        document.querySelectorAll(".figury div").forEach((e)=>{
            e.style.backgroundColor="#FFE"
        });
        e.target.style.backgroundColor = "lightskyblue"
    }


    return (
        <div className="kontener">
            <div className="choice">
                <div className="figury">
                        <div id="0" onClick={(e) => handleClick(e, "as")}><p>A</p></div>
                         <div id="1"  onClick={(e) => handleClick(e, "2")}><p>2</p></div>
                         <div id="2"  onClick={(e) => handleClick(e, "3")}><p>3</p></div>
                        <div id="3"  onClick={(e) => handleClick(e, "4")}><p>4</p></div>
                        <div id="4"  onClick={(e) => handleClick(e, "5")}><p>5</p></div>
                        <div id="5"  onClick={(e) => handleClick(e, "6")}><p>6</p></div>
                        <div id="6"  onClick={(e) => handleClick(e, "7")}><p>7</p></div>
                        <div id="7"  onClick={(e) => handleClick(e, "8")}><p>8</p></div>
                        <div id="8"  onClick={(e) => handleClick(e, "9")}><p>9</p></div>
                        <div id="9"  onClick={(e) => handleClick(e, "10")}><p>10</p></div>
                        <div id="10"  onClick={(e) => handleClick(e, "jopek")}><p>J</p></div>
                        <div id="11"  onClick={(e) => handleClick(e, "królowa")}><p>Q</p></div>
                        <div id="12"  onClick={(e) => handleClick(e, "król")}><p>K</p></div>
                        <div id="13"  onClick={(e) => handleClick(e, "joker")}><img src="../mycollection/png/001-joker-hat.png" alt="yup"/></div>
                </div>
            </div>
        </div>
)
}

export default Numbers