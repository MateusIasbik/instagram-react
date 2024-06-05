import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import Body from "./Body";


function App() {
    return (
        <>
            <Navbar />
            <Body />
        </>
    )
}

const app = App();
ReactDOM.render(app, document.querySelector(".root"));