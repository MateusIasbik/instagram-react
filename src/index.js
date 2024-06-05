import React from "react"
import ReactDOM from "react-dom/client"
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
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(app);