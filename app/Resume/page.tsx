'use client';
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../components/Particle";
import ResumeCard from "./ResumeCard";
import CoreLayout from "../Shared/core.layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import TopScroll from "../components/ScrollToTop";

export default function Resume() {
    return (
        <CoreLayout>
            <Container fluid className="resume-section">
                <Particle />
                <TopScroll />
                <Container>
                    <Row className="resume">
                        <Col md={6} className="resume-left">
                            <h3 className="resume-title">Experience</h3>
                            <ResumeCard
                                title="junior backend engineer   [ referral system SaaS application  ]"
                                date="December 2022 - September 2023"
                                content={[
                                    "Contributing to the developement of web3.0 application based on the new DTL hedera chain networkDesigning and implementing microservices, including email functionality and real‑time statistics generation using Kafka",
                                    "Managing database migration from PostgreSQL to CockroachDB, configuring database connections, and Dockerizing processes.",
                                    "Developing new features, conducting unit testing with Jest, and integration testing with Cypress under Domain‑Driven Design principles.",
                                    "Implementing monitoring solutions with Loki and Grafana to enhance application observability and issue resolution.",
                                    "Keywords: NestJS, Microservices, KafkaJS, Domain‑driven‑design, Unit testing(jest), integration testing(cypress.io) Agile, docker, kubernetes"
                                ]}
                            />
                            <ResumeCard
                                title="junior software engineer   [ NFT marketplace  ]"
                                date="April 2022 - October 2022"
                                content={[
                                    "Contributing to the developement of web3.0 application based on the new DTL hedera chain network",
                                    "Most focus was about backend and third parties , but as start-up culture I have hands dirty with Gatsby",
                                    "Using container technology for continues deployment & implementing puplines to github actions",
                                    "Keywords : node.js , Gatsby , typescript , garphQL, apollo,  docker, mongoDb, prisma, type-graphql, Algolia, git"
                                ]}
                            />
                            <ResumeCard
                                title="Graduate internship as software engineer [Bulldozer][Xpense application]"
                                date="July 2021 - February 2022"
                                content={[
                                    "Contributing in the back-end developement and imposing headless-cms technology to gain time.",
                                    "Unit test the API's to ensure their stabilities .",
                                    "Using container technology for continues deployment",
                                    "Keywords : strapi , next js , aws [( S3 ), ( lambda serverless )], docker, sqlite3[test], mariaDB(production), bookshelf js, knex, vercel, git, kanbanize"
                                ]}
                            />
                            <ResumeCard
                                title="summer internship Backend developer [HackUp][Hackathon Plateform]"
                                date="June 2020 - September 2020"
                                content={[
                                    "Design and implementation of back-end Plateform .",
                                    "Integration of several back-end modules and microservices .",
                                    "Using container technology for microservice creation and handling",
                                    "Node.js Express.js Docker Judge0"
                                ]}
                            />
                            <ResumeCard
                                title="Summer internship full stack java angular developer[Think-Tank][Smart-HR]"
                                date="June 2019 - September 2019"
                                content={[
                                    "Leading the developement of smart human ressources web application .",
                                    "Evolved the database schema with Liquibase",
                                    "Designed the Front End with bootstrap and angular material .",
                                    "Documented the REST API with OpenApi ( swagger )",
                                    "JAVA EE MySQL Workbench Angular"
                                ]}
                            />
                            <ResumeCard
                                title="Freelance web developer"
                                content={[
                                    "Conception and developement of an e-commerce web application for selling documents online using ASP.NET mvc , javascript, SQL server"
                                ]}
                            />
                        </Col>
                        <Col md={6} className="resume-right">
                            <h3 className="resume-title">Education</h3>
                            <ResumeCard
                                title="Software engineering [ESPRIT] "
                                date="2015 - 2021"
                                content={[]}
                            />


                            <h3 className="resume-title">Academic projects</h3>
                            <ResumeCard
                                title="ADVYTEAM[Smart-HR]"
                                content={[
                                    "Develo a web application for smart human ressources with an implementation of K-means Clustering algorithm for expense report for mission",
                                    "ASP.NET JavaEE wildfly 9, Anaconda",
                                ]}
                            />
                            <ResumeCard
                                title="Insurance management"
                                content={[
                                    "It is about developing a web , Mobile and Desktop application to manage insurance",
                                    "Symfony 3.4 JavaFX Codename One"
                                ]}
                            />
                            <ResumeCard
                                title="Web site ( Miracle Cosmetics )"
                                content={[
                                    "Conception and implementing a web site for an online Shop , integrating two plateforms Front office ( for customers ) and Back office ( for administration ).",
                                    "PHP 5, MySQL, javascript"
                                ]}
                            />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center", position: "relative" }}>
                        <Button variant="primary" href="/louai.pdf" target="_blank">
                            <FontAwesomeIcon icon={faDownload} />Download CV
                        </Button>
                    </Row>
                </Container>
            </Container>
        </CoreLayout>
    );
};