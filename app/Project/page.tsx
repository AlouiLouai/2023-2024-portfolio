'use client'
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../components/Particle";
import CoreLayout from "../Shared/core.layout";
// import leaf from "../../Assets/Projects/instagram.png";
// import hg from "../../Assets/Projects/hg.PNG"
// import emotion from "../../Assets/Projects/talkern.jpg";
// import medhub from "../../Assets/Projects/facebook.jpg";
// import eeg from "../../Assets/Projects/bok.jpg";
// import suicide from "../../Assets/Projects/redux.png";

export default function Projects() {
    return (
        <CoreLayout>
            <Container fluid className="project-section">
                <Particle />
                <Container>
                    <h1 className="project-heading">
                        My Recent <strong className="purple">Works </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                        Here are a few projects I've worked on recently.
                    </p>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                isBlog={false}
                                title="NFT Marketplace"
                                description="As openSea , but based on the new DLT ( hedera-chin-network ) "
                                link="https://www.hashguild.xyz"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                isBlog={false}
                                title="Instagram Clone"
                                description="Simple instagram that allow you to push your photos, comment them add do follow/unfollow ."
                                link="https://gitlab.com/LouaiAloui/instaloup"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                isBlog={false}
                                title="Talkern "
                                description="Talk with {e}xpress {r}eact {n}ode is an instant chat application that use socket.io library."
                                link="https://gitlab.com/LouaiAloui/talkern"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                isBlog={false}
                                title="Servless react redux-saga"
                                description="Finally done with redux-saga application that had videos reader and photo viewer ."
                                link="https://gitlab.com/LouaiAloui/react-redux-saga"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                isBlog={false}
                                title="E-book shopping"
                                description="E-commerce web application for selling documents , books. It was like a volontary project made for one friend ."
                                link="https://gitlab.com/LouaiAloui/e_book_shopping"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                isBlog={false}
                                title="Cool Chrome extension"
                                description="A chrome extension that allow you to share one picture or some text in any website by one click to Facebook. A modal with the interface of share photo or text on Facebook."
                                link="https://gitlab.com/LouaiAloui/facebooksharecontent"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </CoreLayout>
    );
}