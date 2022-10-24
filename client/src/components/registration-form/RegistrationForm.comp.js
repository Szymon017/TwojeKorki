import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'


const initialState =
{
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    confirmPass: '',
};

const passVerificationError = {
    isLenthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpclChr: false,
    confirmPass: false,
};


export const RegistrationForm = () => {

    const [newUser, setnewUser] = useState(initialState);
    const [passwordError, setpasswordError] = useState(passVerificationError);


    useEffect(() => { }, [newUser]);

    const handleOnchange = e => {
        const { name, value } = e.target;

        setnewUser({ ...newUser, [name]: value });



        if (name === "password") {
            const isLenthy = value.length > 8;
            const hasUpper = /[A-Z]/.test(value);
            const hasLower = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            const hasSpclChr = /[@, #, $, %, &]/.test(value);

            setpasswordError({ ...passwordError, isLenthy, hasUpper, hasLower, hasNumber, hasSpclChr });
        }

        if (name === "confirmPass") {
            setpasswordError({
                ...passwordError,
                confirmPass: newUser.password === value,
            });
        }
    };

    const handleOnSubmit = (e) =>{
        e.preventDefault();


       
    };
    return (

        <Container>
            <Row>
                <Col>
                    <h1 className='text-info'>Rejestracja użytkownika</h1>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group >
                            <Form.Label>Imie:</Form.Label>
                            <Form.Control type="text" onChange={handleOnchange} name="name" value={newUser.name} placeholder="Twoje imie" />

                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Nazwisko:</Form.Label>
                            <Form.Control type="text" onChange={handleOnchange} name="surname" value={newUser.surname} placeholder="Twoje nazwisko" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Adres email:</Form.Label>
                            <Form.Control type="email" onChange={handleOnchange} name="email" value={newUser.email} placeholder="Twoj email" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Numer telefonu:</Form.Label>
                            <Form.Control type="number" onChange={handleOnchange} name="phone" value={newUser.phone} placeholder="Nr telefonu" />

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Hasło:</Form.Label>
                            <Form.Control type="password" onChange={handleOnchange} name="password" value={newUser.password} placeholder="Twoje hasło" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Powtórz hasło:</Form.Label>
                            <Form.Control type="password" onChange={handleOnchange} name="confirmPass" value={newUser.confirmPass} placeholder="Powtórz hasło" />
                        </Form.Group>
                        <Form.Text>
                            {!passwordError.confirmPass && (
                                <div className='text-danger mb-3'>Hasła nie są takie same!</div>
                            )}
                        </Form.Text>

                        <ul className='mb-4'>
                            <li className={passwordError.isLenthy ? "text-success" : "text-danger"}>min 8 znaków</li>
                            <li className={passwordError.hasUpper ? "text-success" : "text-danger"}>conajmniej jedna wielka litera</li>
                            <li className={passwordError.hasLower ? "text-success" : "text-danger"}>conajmniej jedna mała litera</li>
                            <li className={passwordError.hasNumber ? "text-success" : "text-danger"}>conajmniej jedna liczba</li>
                            <li className={passwordError.hasSpclChr ? "text-success" : "text-danger"}>conajmniej jeden ze znaków specjalnych (@ # $ % &)</li>
                        </ul>


                        <Button variant="primary" type="submit" disabled={Object.values(passwordError).includes(false)}>
                            Zarejestruj
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col className='py-4'>
                         Masz juz u nas konto? 
                         <a href='/'> Zaloguj teraz!</a>     
                </Col>
                </Row>                    
        </Container>

    );
};
