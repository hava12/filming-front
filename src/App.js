import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

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
        <Router>
            <div className="App">
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/movies" element={<Movies />} />
                        <Route
                            path="/users"
                            element={
                                <>
                                    <Users />
                                    <form onSubmit={onSubmit}>
                                        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
                                        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                                        <button type="submit">Login</button>
                                    </form>
                                </>
                            }
                        />
                        <Route path="/" element={<Home />} exact />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
