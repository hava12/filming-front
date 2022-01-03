import React, { useEffect } from "react";
import axios from "axios";

const Users = () => {
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            console.log(res);
        });
    });
    return <h1>Users</h1>;
};

export default Users;
