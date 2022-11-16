import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typeahead } from 'react-bootstrap-typeahead';
import categories from '../../../assets/category/categories';

export default function AddNewAnnoucement() {
  const initialState = {
    userID: '',
    title: '',
    option: '',
    category: '',
    location: '',
    description: '',
    price: 0,
    date: Date.now(),
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
    const { title, option, category, location, description, price } = form;
    const newErrors = {};

    if (!title || title === '') newErrors.title = 'Proszę wprowadź tytuł';

    if (!option || option === 'Wybierz opcje...')
      newErrors.option = 'Proszę wybierz jedną z opcji';

    if (!category || category === '')
      newErrors.category = 'Proszę wybierz kategorie';

    if (!location || location === '')
      newErrors.location = 'Proszę podaj lokalizację';
    if (!description || description === '')
      newErrors.description = 'Proszę wprowadź opis ogłoszenia';
    else if (description.length > 230)
      newErrors.description = 'Opis jest za długi (max 230 znaków)';

    if (!price || price === '') newErrors.price = 'Wprowadź cene';
    else if (price < 1) newErrors.price = 'Cena musi byc wieksza od zera';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent post data

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('form submitted');
      console.log(form);
      
      fetch('http://localhost:3000/annoucements/add', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(form)
      }).then(() => {
        console.log('new annoucement`s just added')
      })
    }
  };
  
  return (
    <div className='addAnnContainer'>
      <h1 className="my-3">Dodaj Ogłoszenie</h1>
      <Container>
        <Form>
          {/*Tytuł */}
          <Form.Group as={Row} className="mb-3" controlId="title">
            <Form.Label column sm={3}>
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
            <Form.Label as="legend" column sm={3}>
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
            <Form.Label column sm={3}>
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
            <Form.Label column sm={3}>
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
            <Form.Label>Opis:</Form.Label>
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
            <Form.Label column sm={4}>
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
              Dodaj ogłoszenie
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
