"use client";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function ChooseCards({
  title,
  description,
  previewLink,
}: any) {
  const [showPreview, setShowPreview] = useState(false);

  // Open the modal when mouse enters
  const handleMouseEnter = () => {
    setShowPreview(true);
  };

  // Close the modal when clicked outside
  const handleModalClose = () => {
    setShowPreview(false);
  };

  return (
    <>
      <Card className="project-card-view" onMouseEnter={handleMouseEnter}>
        <iframe
          src={previewLink}
          className="pdf-preview"
          title={`${title} Preview`}
        ></iframe>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        </Card.Body>
      </Card>

      {/* Modal for Full-Screen Preview */}
      <Modal
        show={showPreview}
        onHide={handleModalClose}
        size="xl"
        centered
        fullscreen
        animation={false}
        backdrop="static" // Prevent closing when clicking outside, but handle onHide manually
      >
        <Modal.Body>
          <iframe
            src={previewLink}
            style={{
              width: "100%",
              height: "100vh",
              border: "none",
            }}
            title={`${title} Full Preview`}
          ></iframe>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .image-wrapper {
          position: relative;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f8f9fa;
        }
        .flag-icon {
          width: 60px;
          height: auto;
        }
        .pdf-preview {
          width: 100%;
          height: 500px;
          border: none;
        }
      `}</style>
    </>
  );
}
