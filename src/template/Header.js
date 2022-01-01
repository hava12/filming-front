import React from "react";
import "./Header.css";

const MenuItem = ({ active, children, to }) => {
    return <div className="menu-item">{children}</div>;
};

const Header = () => {
    return (
        <div>
            <div className="logo">Filming</div>
            <div className="menu">
                <MenuItem>Home</MenuItem>
                <MenuItem>Posts</MenuItem>
                <MenuItem>Settings</MenuItem>
            </div>
        </div>
    );
};

export default Header;
