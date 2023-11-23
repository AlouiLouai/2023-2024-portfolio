'use client'
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../components/Particle";
import CoreLayout from "../Shared/core.layout";
import instagramLogo from "../../public/projects/instagram.png";
import hgLogo from "../../public/projects/hg.jpg"
import talkernLogo from "../../public/projects/talkern.jpg";
import facebookLogo from "../../public/projects/facebook.jpg";
import bookLogo from "../../public/projects/bok.jpg";
import reduxLogo from "../../public/projects/redux.png";
import expressReactGraphqlLogo from "../../public/projects/reg.png"
import reactLogo from "../../public/projects/react.png";
import csgoLogo from "../../public/projects/cs_go.jpg";
import dockerLogo from "../../public/projects/docker.png"
import downloadImageLogo from "../../public/projects/download_images.png";

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
                        Here are a few projects I&apos;ve worked on recently.
                    </p>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={expressReactGraphqlLogo}
                                isBlog={false}
                                title="Event application"
                                description=" playing with express, graphql, react(VITE), mongoDB, JWT "
                                link="https://github.com/AlouiLouai/express-react-graphql"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={reactLogo}
                                isBlog={false}
                                title="Witout create-react-app"
                                description="Since deprecated , I implement a react app from scratch with typescript without runnung the CRA"
                                link="https://github.com/AlouiLouai/without-create-react-app-typescript-"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={csgoLogo}
                                isBlog={false}
                                title="Playing with CS-GO"
                                description="tooking a txt file having data from cs-go real party, working with python to get the stats I need . Using the child process of node js to get the data from python"
                                link="https://github.com/AlouiLouai/playing-with-CS-GO-dataset"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={dockerLogo}
                                isBlog={false}
                                title="Docker app"
                                description="Playing with express js, postgresql, sequelize and docker to CRUD a user "
                                link="https://github.com/AlouiLouai/dockerApp"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={hgLogo}
                                isBlog={false}
                                title="NFT Marketplace"
                                description="As openSea , but based on the new DLT ( hedera-hashgraph ) "
                                link="https://www.hashguild.xyz"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={instagramLogo}
                                isBlog={false}
                                title="Instagram serverAPI Clone"
                                description="Simple instagram API that allow you to push your photos, comment them add do follow/unfollow ."
                                link="https://gitlab.com/LouaiAloui/instaloup"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={talkernLogo}
                                isBlog={false}
                                title="Talkern "
                                description="Talk with {e}xpress {r}eact {n}ode is an instant chat application that use socket.io library."
                                link="https://gitlab.com/LouaiAloui/talkern"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={reduxLogo}
                                isBlog={false}
                                title="Servless react redux-saga"
                                description="Finally done with redux-saga application that had videos reader and photo viewer ."
                                link="https://gitlab.com/LouaiAloui/react-redux-saga"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={bookLogo}
                                isBlog={false}
                                title="E-book shopping"
                                description="E-commerce web application for selling documents , books. It was like a volontary project made for one friend ."
                                link="https://gitlab.com/LouaiAloui/e_book_shopping"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={facebookLogo}
                                isBlog={false}
                                title="Cool Chrome extension"
                                description="A chrome extension that allow you to share one picture or some text in any website by one click to Facebook. A modal with the interface of share photo or text on Facebook."
                                link="https://gitlab.com/LouaiAloui/facebooksharecontent"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={downloadImageLogo}
                                isBlog={false}
                                title="Another cool Chrome extension"
                                description="A chrome extension that allow you to download picture in any website by one click."
                                link="https://gitlab.com/LouaiAloui/imagedownloader"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </CoreLayout>
    );
}