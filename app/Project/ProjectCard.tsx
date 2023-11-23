'use client'
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from 'next/image';

export default function ProjectCards(props: any) {
    return (
        <Card className="project-card-view">
            {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
            <div className="image-wrapper">
                <Image
                    src={props.imgPath}
                    alt="card-img"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top center"
                />
            </div>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Button variant="primary" href={props.link} target="_blank">
                    <i className="cil-external-link">&nbsp;</i>
                    {props.isBlog ? "View Blog" : "View Project"}
                </Button>
            </Card.Body>
            <style jsx>{`
                .image-wrapper {
                    position: relative;
                    height: 200px; /* Set the desired height */
                }
            `}</style>
        </Card>
    );
}