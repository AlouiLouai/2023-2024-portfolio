import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aloui Louai </span>
            from <span className="purple"> Tunisia</span>
            <br />Software engineer.
            <br />
            Currently, I'm diving deep into the world of Artificial Intelligence, Machine Learning, and Cloud Platforms, eager to leverage these skills in innovative automation projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FontAwesomeIcon icon={faHandPointRight} /> Playing Football
            </li>
            <li className="about-activity">
              <FontAwesomeIcon icon={faHandPointRight} /> Reading books
            </li>
            <li className="about-activity">
              <FontAwesomeIcon icon={faHandPointRight} /> Listning to music
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            Strive to build things that make a difference!{" "}
          </p>
          <footer className="blockquote-footer">Louai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;