import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { isEmail } from "validator";
import './style.css';
import { login } from '../../../service/userService';

export default function Login() {
    const initialState = {
        email: "",
        password: ""
    }

    const [user, setUser] = useState(initialState);
    const [error, setError] = useState({});


    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name] : value
        })
        console.log(user);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        const result = await login(user);
        
        if (result.data) {
            window.location.assign('/');
        }else{
            setError({error: result.message})
        }
    }

    return <>
    <Container>
        <Row className='loginForm'>
            <Col>
                <div  className='loginColumn'>
                    <Form className='form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <div className='loginLogo'>
                                <h1>TwojeKorki</h1>
                                <p>Zaloguj się</p>
                            </div>
                            <Form.Label>Adres email</Form.Label>
                            <input
                                name="email" 
                                type="email" 
                                required
                                onChange={handleChange} 
                                className="form-control" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Hasło</Form.Label>
                            <input
                                name="password"
                                type="password"
                                required
                                onChange={handleChange}
                                className="form-control"
                            />
                        </Form.Group>
                        <p className='text-danger'>{error.error}</p>

                        <div className='button' onClick={handleSubmit}>
                            <button type="submit">
                                Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
    </Container>
    </>
}