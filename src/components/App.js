import React from "react";
import Header from "./Header";
import Board from "./Board";
const App = () => {
    return (
        <div className="container bg-dark">
            <Header/>
            <Board />
        </div>
    );
};

export default App;