import React, { useState } from "react";
import quot from "../quotes.json";
const getRandom = () => Math.floor(Math.random() * quot.length);

const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871",
    "#ffa500"
];

const User = () => {

    //const user = quot[2];
    const [user, setUser] = useState(quot[0]);
    const color = colors[Math.floor(Math.random() * colors.length)];

    document.body.style = `background: ${color}`;

    const changephrase = () => {
        setUser(quot[getRandom()])
    }

    return ( <
        div className = "container" >
        <
        div className = "contents1" >
        <
        i class = "fa-solid fa-quote-left"
        style = {
            { color: color } } > < /i> <
        /div> <
        div className = "contents2"
        style = {
            { color: color } } > { user.quote } <
        /div> <
        div className = "contents3"
        style = {
            { color: color } } > { user.author } <
        /div> <
        div className = "contents4" >
        <
        button onClick = { changephrase }
        style = {
            { color: color } } >
        <
        i className = "fa-solid fa-shuffle" > < /i> <
        /button>  <
        /div> <
        /div>
    );
};

export default User;