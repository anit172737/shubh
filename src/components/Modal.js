import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalBody } from "reactstrap";
import Slider from "./Slider";

const ImgModal = ({ showModal, handleClose }) => {
  console.log("showModal", showModal);
  return (
    <div>
      <Modal
        isOpen={showModal}
        size="lg"
        style={{
          maxWidth: "77vw",
          width: "100%",
        }}
        centered
        backdrop="static"
        onAbort={handleClose}
      >
        <ModalBody style={{ height: "40vw", position: "relative" }}>
          <Slider />
          <Button
            onClick={handleClose}
            style={{
              position: "absolute",
              bottom: "1vw",
              right: "1vw",
              height: "2.6vw",
              width: "5vw",
              borderRadius: "4vw",
            }}
          >
            Close
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ImgModal;
