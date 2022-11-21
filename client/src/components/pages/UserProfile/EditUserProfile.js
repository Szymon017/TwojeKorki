import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function EditUserProfile() {
  const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    sex: '',
    description: '',
    telephone: '',
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    //sprawdzenie czy sa jakies errory i usuniecie ich z obiektu
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateForm = () => {
    const { email, firstName, lastName, sex, description, telephone } = form;
    const newErrors = {};

    if (!email || email === '') newErrors.email = 'Proszę wprowadź email';

    if (!sex || sex === 'Wybierz opcje...')
      newErrors.sex = 'Proszę wybierz jedną z opcji';

    if (!firstName || firstName === '')
      newErrors.firstName = 'Proszę wprowadź imię';

    if (!lastName || lastName === '')
      newErrors.lastName = 'Proszę wprowadź nazwisko';
    if (!description || description === '')
      newErrors.description = 'Proszę wprowadź opis użytkownika';
    else if (description.length > 230)
      newErrors.description = 'Opis jest za długi (max 230 znaków)';

    if (!telephone || telephone === '')
      newErrors.telephone = 'Proszę wprowadź numer telefonu';
    else if (telephone.length !== 9)
      newErrors.telephone = 'Numer telefomnu musi zawierać 9 cyfr';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent post data

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('form submitted');
      {
        /* 
      const user = getCurrentUser();
      form.author = user._id;
      const result = addAnnouncement(form);
      result.then((res) => {
        console.log(res);
        if (res.error) {
          console.log(res.error);
        } else {
          window.location.assign('/annoucements');
        }
      });
      */
      }
    }
  };

  return (
    <div className="addAnnContainer">
      <h1 className="my-3 fw-bold text-center">Edycja profilu</h1>
      <Container>
        <Form>
          {/*Email */}
          <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Label column sm={3} className=" fw-bold">
              Email:
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="email"
                placeholder="Podaj email"
                name="email"
                value={form.email}
                onChange={(e) => setField('email', e.target.value)}
                isInvalid={!!errors.email}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          {/*firstName */}
          <Form.Group controlId="firstName" as={Row} className="mb-3">
            <Form.Label column sm={3} className=" fw-bold">
              Imie:
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Podaj imię"
                name="firstName"
                value={form.location}
                onChange={(e) => setField('firstName', e.target.value)}
                isInvalid={!!errors.firstName}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          {/*lastName */}
          <Form.Group as={Row} className="mb-3" controlId="lastName">
            <Form.Label column sm={3} className=" fw-bold">
              Nazwisko:
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="textarea"
                placeholder="Podaj nazwisko"
                name="lastName"
                value={form.lastName}
                isInvalid={!!errors.lastName}
                onChange={(e) => setField('lastName', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          {/*sex */}
          <Form.Group as={Row} className="mb-3" controlId="sex">
            <Form.Label as="legend" column sm={3} className=" fw-bold">
              Płeć:
            </Form.Label>
            <Col sm={9}>
              <Form.Select
                value={form.sex}
                isInvalid={!!errors.sex}
                placeholder="Dodaje jako"
                onChange={(e) => {
                  setField('sex', e.target.value);
                }}
              >
                <option>Wybierz opcje...</option>
                <option value="male">Mężczyzna</option>
                <option value="Female">Konieta</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.sex}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          {/*Opis */}
          <Form.Group className="mb-3" controlId="description">
            <Form.Label className=" fw-bold">Twój opis:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="textarea"
              placeholder="Twój opis"
              name="description"
              value={form.description}
              isInvalid={!!errors.description}
              onChange={(e) => setField('description', e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>

          {/*telephone */}
          <Form.Group as={Row} className="mb-3" controlId="telephone">
            <Form.Label column sm={4} className=" fw-bold">
              Nr telefonu:
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                placeholder="Podaj numer tel"
                name="telephone"
                value={form.telephone}
                isInvalid={!!errors.telephone}
                onChange={(e) => setField('telephone', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telephone}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          {/*Przycisk dodania */}
          <div className="d-grid gap-2">
            <Button
              type="submit"
              onClick={handleSubmit}
              className="my-2"
              variant="warning"
              size="lg"
            >
              Zaktualizuj dane
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
