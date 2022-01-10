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
            </form>
            <button type="button" className="btn btn-secondary m-2" data-bs-toggle="modal" data-bs-target="#joinModal">Join</button>

            <div className="modal fade" id="joinModal" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" style={{display: "none"}} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>This is a vertically centered modal.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
};

export default Home;
