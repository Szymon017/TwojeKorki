import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getCurrentUser } from '../../../service/userDataService';
import { useParams } from 'react-router-dom';
import { addNewReview } from '../../../service/reviewsService';

export default function RatingForm() {
  const params = useParams();
  const _id = params._id;
  const initialState = {
    author: getCurrentUser()._id,
    user: _id,
    option: '',
    com: '',
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
    const { option, com } = form;
    const newErrors = {};
    if (!option || option === 'Wybierz opcje...')
      newErrors.option = 'Proszę wybierz jedną z opcji';
    if (!com || com === '') newErrors.com = 'Proszę wprowadź komentarz';
    else if (com.length > 230)
      newErrors.com = 'Komentarz jest za długi (max 230 znaków)';

      return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent post data

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('form submitted');
      addNewReview(form);

    }
  };

  return (
    <div className="addRating my-3">
      <h1 className="my-3  ms-3">Ocena</h1>
      <Container>
        <Form>
          {/*Ocena */}
          <Form.Group controlId="option" as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Select
                value={form.option}
                isInvalid={!!errors.option}
                placeholder="Dodaje jako"
                onChange={(e) => {
                  setField('option', e.target.value);
                }}
              >
                <option>Wybierz opcje...</option>
                <option value="1">1-Nie polecam</option>
                <option value="2">2-Dostateczne</option>
                <option value="3">3-Dopuszczające</option>
                <option value="4">4-Dobre</option>
                <option value="5">5-Bardzo dobre</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.option}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          {/*Komentarz */}
          <Form.Group as={Row} className="mb-3" controlId="com">
            <Col sm={12}>
              <Form.Control
                type="text"
                placeholder="Komentarz"
                name="com"
                value={form.com}
                onChange={(e) => setField('com', e.target.value)}
                isInvalid={!!errors.com}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.com}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          {/*Przycisk dodania opinii*/}
          <div className="d-grid gap-2">
            <Button
              type="submit"
              onClick={handleSubmit}
              className="my-2"
              variant="warning"
              size="lg"
            >
              Dodaj opinie
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
