'use client'
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Link from "next/link";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            if (window.scrollY >= 20) {
                updateNavbar(true);
            } else {
                updateNavbar(false);
            }
        }

        window.addEventListener("scroll", scrollHandler);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []); // The empty dependency array ensures that this effect runs only once on component mount

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/">

                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(!expand);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} href="/" onClick={() => updateExpanded(false)}>
                                <i className="fas fa-home"></i> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                href="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <i className="far fa-user"></i> About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                href="/project"
                                onClick={() => updateExpanded(false)}
                            >
                                <i className="fab fa-codepen"></i> Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                href="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <i className="far fa-file-alt"></i> Resume
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item className="fork-btn">
                            <Button
                                href="https://gitlab.com/LouaiAloui"
                                target="_blank"
                                className="fork-btn-inner"
                            >
                                <i className="fas fa-code-branch"></i>{" "}
                                <i className="far fa-star"></i>
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;