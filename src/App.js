import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./template/Header";
import Counter from "./components/Counter";

function App() {
    useEffect(() => {
        console.log("effect");
    });
    console.log("rendering");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        alert("submitted");
    };
    return (
        <div className="App">
            <Header />
            <form onSubmit={onSubmit}>
                <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
                <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button type="submit">Login</button>
            </form>
            <Counter />
            <Counter />
        </div>
    );
}

export default App;
