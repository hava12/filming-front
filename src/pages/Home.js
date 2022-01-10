import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [joinFlag, setJoinFlag] = useState("show");

    const login = (e) => {
        e.preventDefault();
        const userInfo = { userId: userId, password: password };
        axios.post("http://localhost:8000/user-service/v1/login", userInfo).then((res) => {
            console.log(res);
        });
        console.log(userId, password);
    };

    const join = () => {
        alert('회원가입 Modal')
        if(joinFlag === "show") {
            setJoinFlag("")
        } else {
            setJoinFlag("show")
        }
    }

    return (
        <>
            <h1>Home</h1>
            <br/><br/><br/>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input placeholder="UserId" value={userId} onChange={(e) => setUserId(e.target.value)} /> <br />
                <input placeholder="Password" className="mt-2" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button type="submit" className="btn btn-success m-2" >Login</button><br/>
                <Link to={`/join`}>비밀번호를 잃어버리셨나요?</Link><br/>
                <hr/>
                <button onClick={join} className="btn btn-secondary m-2" >Join</button>
            </form>

            <div className={"modal-dialog modal-dialog-centered"} >
            ...
            </div>

        </>
    ) 
};

export default Home;
