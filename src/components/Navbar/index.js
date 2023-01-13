import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

export default function Navbar(props) {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activestyle>Home</NavLink>
                    <NavLink to="/resume" activestyle>Resume</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};