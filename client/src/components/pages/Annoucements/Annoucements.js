import OneAnnounce from './OneAnnounce';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { getAnnoucements } from '../../../service/announcementService';
import Form from 'react-bootstrap/esm/Form';
import './style.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Typeahead } from 'react-bootstrap-typeahead';
import categories from '../../../assets/category/categories';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Annoucements() {
  const initialState = {
    category: '',
    location: '',
    option: '',
    maxPrice: '',
    minPrice: '',
    sortOption: '',
  };
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState(initialState);
  const [buttonText, setButtonText] = useState('Więcej filtrów'); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
  const [buttonClick, setButtonClick] = useState(true);
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent post data
    console.log('form filtr submitted');
    console.log(form);
    //tu se wyślij na backend 
  };

  const [annoucements, setAnnoucements] = useState();

  const getAllAnnoucements = async () => {
    const result = await getAnnoucements();
    console.log(result);
    setAnnoucements(result.data.data.annoucements);
  };

  useEffect(() => {
    getAllAnnoucements();
  }, []);

  const moreFilters = () => {
    setVisible(!visible);
  };

  const moreFiltersFun = () => {
    moreFilters();
    setButtonClick(!buttonClick);
    if (buttonClick === true) {
      setButtonText('Mniej filtrów');
      
    } else {
      setButtonText('Więcej filtrów');
    }
  };
  return (
    <div>
      <div>
        <h1>Filtry</h1>
        <Container>
          <Form>
            <Row>
              <Col sm={12} md={6} lg={4}>
                {/*Kategorie */}
                <Form.Group as={Row} className="mb-3" controlId="category">
                  <Form.Label column sm={4} md={4} lg={4} className=" fw-bold">
                    Kategoria:
                  </Form.Label>
                  <Col sm={8} md={8} lg={8}>
                    <Typeahead
                      id="category"
                      name="category"
                      onChange={(selected) => {
                        console.log(selected);
                        console.log('get value out', selected[0]);
                        setField('category', selected && selected[0]);
                      }}
                      inputProps={{ required: true }}
                      placeholder="Wybierz kategorie..."
                      options={categories}
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={12} md={6} lg={4}>
                {/*Lokalizacja */}
                <Form.Group as={Row} className="mb-3" controlId="location">
                  <Form.Label column sm={4} className=" fw-bold">
                    Lokalizacja:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      placeholder="Podaj miasto"
                      name="location"
                      value={form.location}
                      onChange={(e) => setField('location', e.target.value)}
                    ></Form.Control>
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={12} md={12} lg={4}>
                {/*Przycisk szukania */}
                <div className="d-grid gap-2">
                  <Button
                    className="border border-dark"
                    type="submit"
                    onClick={handleSubmit}
                    variant="warning"
                  >
                    <i class="bi bi-search"></i> Szukaj...
                  </Button>
                </div>
              </Col>
            </Row>

            <Row className="mt-3 ">
              {/*Przycisk wiecej filtrow*/}
              <Col sm={12} md={12} lg={12} className="mb-3">
                <Button
                  className="border border-dark"
                  variant="warning"
                  onClick={moreFiltersFun}
                >
                  {buttonText}
                </Button>
              </Col>
              <div>
                {visible && (
                  <div>
                    <Col sm={12} md={12} lg={4}>
                      {/*Szukaj kor/ucznia */}
                      <Form.Group controlId="option" as={Row} className="mb-3">
                        <Form.Label
                          as="legend"
                          column
                          sm={4}
                          md={2}
                          lg={4}
                          className=" fw-bold"
                        >
                          Ogłoszenia:
                        </Form.Label>
                        <Col sm={8} md={10} lg={8}>
                          <Form.Select
                            value={form.option}
                            placeholder="Dodaje jako"
                            onChange={(e) => {
                              setField('option', e.target.value);
                            }}
                          >
                            <option>Wybierz opcje...</option>
                            <option value="Teacher">Korepetytora</option>
                            <option value="Student">Uczenia</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                      {/*Cena od*/}
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="minPrice"
                      >
                        <Form.Label column sm={4} className=" fw-bold">
                          Cena od:
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="number"
                            placeholder="Twoja cena"
                            name="minPrice"
                            value={form.minPrice}
                            onChange={(e) =>
                              setField('minPrice', e.target.value)
                            }
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                      {/*Cena do*/}
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="maxPrice"
                      >
                        <Form.Label column sm={4} className=" fw-bold">
                          Cena do:
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="number"
                            placeholder="Twoja cena"
                            name="maxPrice"
                            value={form.maxPrice}
                            onChange={(e) =>
                              setField('maxPrice', e.target.value)
                            }
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </div>
                )}
              </div>
            </Row>
            <Row>
              <div
                style={{
                  backgroundColor: 'black',
                  padding: '2px',
                  marginBottom: '2rem',
                  marginTop: '1rem',
                }}
              ></div>
            </Row>
            <Row>
              <Col sm={4} md={4} lg={8}></Col>
              <Col sm={6} md={6} lg={3}>
                {/*Sortuj: */}
                <Form.Group controlId="sortOption" as={Row} className="mb-3">
                  <Form.Label
                    as="legend"
                    column
                    sm={4}
                    md={3}
                    className=" fw-bold"
                  >
                    Sortuj:
                  </Form.Label>
                  <Col sm={8} md={9}>
                    <Form.Select
                      value={form.sortOption}
                      placeholder=""
                      onChange={(e) => {
                        setField('sortOption', e.target.value);
                      }}
                    >
                      <option value="old">Najnowsze</option>
                      <option value="new">Najstarsze</option>
                      <option value="maxPrice">Najdroższe</option>
                      <option value="minPrice">Najtańsze</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={2} md={2} lg={1}>
                <Button
                  className="border border-dark"
                  variant="warning"
                  onClick={handleSubmit}
                >
                  Sortuj
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <h1 className="">Ogłoszenia użytkowników</h1>

      <div className="announces my-3">
        <Row>
          {annoucements
            ? annoucements.map((ann) => (
                <Row key={ann.title}>
                  <Col sm={12} md={12} lg={12} className="mb-1">
                    <OneAnnounce announce={ann}></OneAnnounce>
                  </Col>
                </Row>
              ))
            : ''}
        </Row>
      </div>
    </div>
  );
}
