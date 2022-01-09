import React, {useState} from "react";
import axios from "axios";

const Home = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();
        const userInfo = { username: username, password: password };
        axios.post("http://localhost:8000/user-service/v1/login", userInfo).then((res) => {
            console.log(res);
        });
        console.log(username, password);
    };

    return (
        <>
            <h1>Home</h1>
            <br/><br/><br/>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
                <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button type="submit">Login</button>
            </form>
        </>
    ) 
};

export default Home;
