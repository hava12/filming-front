import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
    useEffect(() => {
        console.log("effect");
    });
    console.log("rendering");

    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="container">
                    <Routes>
                        <>
                            {routes.map((route) => {
                                return <Route path={route.path} key={route.path} element={<route.component />} exact></Route>;
                            })}
                        </>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
