import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typeahead } from 'react-bootstrap-typeahead';
import categories from '../../../assets/category/categories';
import { updateAnnoucement } from '../../../service/announcementService';
import { useParams } from 'react-router-dom';

export default function EditAnnoucement() {
  
  const initialState = {

    date: Date.now(),
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const params = useParams();
  const { id } = params;

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
    const {description, price } = form;
    const newErrors = {};


    if (description?.length > 230)
      newErrors.description = 'Opis jest za długi (max 230 znaków)';

    if (price < 0) newErrors.price = 'Cena musi byc wieksza od zera';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent post data

    const formErrors = validateForm();
    if (Object.keys(formErrors)?.length > 0) {
      setErrors(formErrors);
    } else {
      const result = updateAnnoucement(id, form);
      result.then((res) => {
        console.log(res);
        if (res.error) {
          console.log(res.error);
        } else {
          window.location.assign('/userProfile');
        }
      });
    }
  };

  return (
    <div className="addAnnContainer">
      <h1 className="my-3 fw-bold text-center">Edytuj Ogłoszenie</h1>
      <Container>
        <Form>
          {/*Tytuł */}
          <Form.Group as={Row} className="mb-3" controlId="title">
            <Form.Label column sm={3} className=" fw-bold">
              Tytuł:
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Twój tytuł"
                name="title"
                value={form.title}
                onChange={(e) => setField('title', e.target.value)}
                isInvalid={!!errors.title}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          {/*Dodaje jako */}
          <Form.Group controlId="option" as={Row} className="mb-3">
            <Form.Label as="legend" column sm={3} className=" fw-bold">
              Dodaje jako:
            </Form.Label>
            <Col sm={9}>
              <Form.Select
                value={form.option}
                isInvalid={!!errors.option}
                placeholder="Dodaje jako"
                onChange={(e) => {
                  setField('option', e.target.value);
                }}
              >
                <option>Wybierz opcje...</option>
                <option value="Teacher">Korepetytor</option>
                <option value="Student">Uczeń</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.option}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          {/*Kategorie */}
          <Form.Group as={Row} className="mb-3" controlId="category">
            <Form.Label column sm={3} className=" fw-bold">
              Kategoria:
            </Form.Label>
            <Col sm={9}>
              <Typeahead
                id="category"
                name="category"
                onChange={(selected) => {
                  console.log(selected);
                  console.log('get value out', selected[0]);
                  setField('category', selected && selected[0]);
                }}
                className={!!errors.category && 'red-border'}
                inputProps={{ required: true }}
                placeholder="Wybierz kategorie..."
                options={categories}
              />
              <div className="red">{errors.category}</div>
            </Col>
          </Form.Group>

          {/*Lokalizacja */}
          <Form.Group as={Row} className="mb-3" controlId="location">
            <Form.Label column sm={3} className=" fw-bold">
              Lokalizacja:
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Podaj miasto"
                name="location"
                value={form.location}
                onChange={(e) => setField('location', e.target.value)}
                isInvalid={!!errors.location}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.location}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          {/*Opis */}
          <Form.Group className="mb-3" controlId="description">
            <Form.Label className=" fw-bold">Opis:</Form.Label>
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

          {/*Cena */}
          <Form.Group as={Row} className="mb-3" controlId="price">
            <Form.Label column sm={4} className=" fw-bold">
              Cena za godzine:
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                placeholder="Twoja cena"
                name="price"
                value={form.price}
                isInvalid={!!errors.price}
                onChange={(e) => setField('price', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.price}
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
              Edytuj ogłoszenie
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
