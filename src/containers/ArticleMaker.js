import React, {useState} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ActiveArticle from '../presentational/ActiveArticle';
import ArticleCard from '../presentational/ArticleCard';
import StreamerCard from '../presentational/StreamerCard';

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
        <button onClick={toggleModal}>Open modal</button>
        <button onClick={toggleModal2}>Open modal</button>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          
        >
          <div>My modal dialog.</div>
          <button onClick={toggleModal}>Close modal</button>
        </Modal>
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModal2}
          contentLabel="My dialog"
        >
          <div>My modal dialog.2222222</div>
          <button onClick={toggleModal2}>Close modal</button>
        </Modal>
    


      </div>
    );
}