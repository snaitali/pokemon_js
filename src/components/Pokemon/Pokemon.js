import React, {useState} from 'react';
import {Card, Button, Modal} from "react-bootstrap";
import {CardStyled, ButtonStyled} from "./style/default";

const PokemonComponent = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <CardStyled style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        {props.name}
                    </Card.Text>
                    <ButtonStyled onClick={handleShow}>Details</ButtonStyled>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>API URL for {props.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{props.url}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </CardStyled>

        </div>
    );
};

export default PokemonComponent;
