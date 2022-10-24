import React from "react";
import { Jumbotron, Form, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './add-announcement-form.style.css'


export const AddAnnouncementForm = ({ handleOnSubmit, handleOnchange, frmDataErro, frmDt }) => {
    console.log(frmDt);

    return (
        <Jumbotron className="mt-3 add-new-announcement bg-light">


            <h1 className="text-info text-center">Dodaj nowe ogłoszenie</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>


                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Autor
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="author"
                            //minLength="3"
                            maxLength="100"
                            value={frmDt.author}
                            onChange={handleOnchange}
                            placeholder="np. imie"
                            required
                        />
                        <Form.Text className="text-danger">
                            {frmDataErro.subject && "Autor jest wymagany!"}
                        </Form.Text>
                    </Col>
                </Form.Group>


                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Tytuł
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="title"
                            //minLength="3"
                            maxLength="100"
                            value={frmDt.title}
                            onChange={handleOnchange}
                            placeholder="tytuł"
                            required
                        />
                        <Form.Text className="text-danger">
                            {frmDataErro.subject && "Tytuł jest wymagany!"}
                        </Form.Text>
                    </Col>
                </Form.Group>



                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Kategoria
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="category"
                            //minLength="3"
                            maxLength="100"
                            value={frmDt.category}
                            onChange={handleOnchange}
                            placeholder="kategoria"
                            required
                        />
                        <Form.Text className="text-danger">
                            {frmDataErro.subject && "Kategoria jest wymagana!"}
                        </Form.Text>
                    </Col>
                </Form.Group>


                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Cena (1h)
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="price"
                            //minLength="3"
                            maxLength="100"
                            value={frmDt.price}
                            onChange={handleOnchange}
                            placeholder="cena"
                            required
                        />
                        <Form.Text className="text-danger">
                            {frmDataErro.subject && "Autor jest wymagany!"}
                        </Form.Text>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Jako
                    </Form.Label>
                    <Col sm={9}>

                        <Form.Group controlId="kindOfStand">
                            <Form.Check
                                value="studnet"
                                type="radio"
                                aria-label="radio 1"
                                label="Uczeń"
                                onChange={handleOnchange}
                                //checked={kindOfStand === "design"}
                            />
                            <Form.Check
                                value="teacher"
                                type="radio"
                                aria-label="radio 2"
                                label="Korepetytor"
                                onChange={handleOnchange}
                                //checked={kindOfStand === "food"}
                            />
                        </Form.Group>


                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Do dnia:
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="date"
                            name="dateTo"
                            value={frmDt.dateTo}
                            onChange={handleOnchange}
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Opis
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        rows="5"
                        value={frmDt.description}
                        onChange={handleOnchange}
                        required
                    />
                </Form.Group>

                <Button type="submit" variant="info" block>Dodaj</Button>


            </Form>
        </Jumbotron>
    )
}

AddAnnouncementForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnchange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataErro: PropTypes.object.isRequired,
};