import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Modal from "react-modal";


Modal.setAppElement("#root");

export const ArticleMaker = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    function toggleModal() {
      setIsOpen(!isOpen);
    }
    function toggleModal2() {
        setIsOpen2(!isOpen2);
      }
    return (
      <div className="App">
        <button className="modal-btn" onClick={toggleModal}>Open modal</button>
        <button className="modal-btn" onClick={toggleModal2}>Open modal 2</button>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
        >
          <button className="modal-btn" onClick={toggleModal}><FontAwesomeIcon size="2x" icon={faWindowClose}/></button>
          <div>Edit Element</div>
          <div className="modal-input-container">
            <textarea className="modal-input" type="text"></textarea>
            <button className="modal-btn">Submit Changes</button>
          </div>
        </Modal>
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModal2}
          contentLabel="My dialog"
          className="mymodal"
        >
          <div>My modal dialog.2222222</div>
          <button className="modal-btn" onClick={toggleModal2}>Close</button>
        </Modal>
    


      </div>
    );
}