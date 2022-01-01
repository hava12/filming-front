import "./App.css";
import React, { useState } from "react";
import Header from "./template/Header";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = () => {
        alert("submitted");
    };
    return (
        <div className="App">
            <Header />
            <input placeholder="Username" /> <br />
            <input placeholder="Password" /> <br />
            <button onClick={onSubmit}> </button>
        </div>
    );
}

export default App;
