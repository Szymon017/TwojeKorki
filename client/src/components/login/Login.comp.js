import React from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { PropTypes } from "prop-types";


export const LoginForm = ({handleOnchange,handleOnSubmit,formSwitcher, email, pass}) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>   
                        <h1 className="text-info text-center">Logowanie użytkownika</h1>
                        <hr />
                        <Form autoComplete="off" onSubmit={handleOnSubmit}>
                            <Form.Group>
                                <Form.Label>
                                    Adres email
                                </Form.Label>
                                <Form.Control type="email"
                                name="email" 
                                value={email}
                                onChange={handleOnchange}
                                placeholder="Wprowadź email" 
                                required
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Hasło
                                </Form.Label>
                                <Form.Control type="password"
                                 name="password"
                                 value={pass}
                                 onChange={handleOnchange}
                                 placeholder="Wprowadź hasło"
                                 required 
                                 />
                            </Form.Group>

                            <Button type="submit">Zaloguj</Button>


                        </Form>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href="hgy" onClick={() => formSwitcher('reset')}>Nie pamiętasz hasła?</a>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

LoginForm.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,

    
}