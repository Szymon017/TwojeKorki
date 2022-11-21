import OneAnnounce from './OneAnnounce';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { getAnnoucements } from '../../../service/announcementService';
import Form from 'react-bootstrap/esm/Form';
import './style.css'
import Button from 'react-bootstrap/Button';
import MoreFilters from './MoreFilters';


export default function Annoucements() {
  const [annoucements, setAnnoucements] = useState();
  const [showFilters, setShowFilters] = useState(false);

  const getAllAnnoucements = async () => {
    const result = await getAnnoucements();
    console.log(result);
    setAnnoucements(result.data.data.annoucements);
  };

  useEffect(() => {
    getAllAnnoucements();
  }, []);

  const moreFilters = () => {
    setShowFilters(!showFilters);
    console.log(showFilters);
  }
  return (
    <div>
      <Row className='annoucementsFilters'>
        <Col md={4}>
          <Form.Select aria-label="Default select example">
            <option>Kategoria</option>
            <option value="1">Angielski</option>
            <option value="2">Hiszpański</option>
            <option value="3">Matematyka</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Control
            type="text"
            id="annoucementCategory"
            placeholder='Miasto'
          />
        </Col>
        <Col md={4}>
          <Form.Select aria-label="Default select example">
            <option>Rodzaj ogłoszenia</option>
            <option value="student">Uczeń</option>
            <option value="teacher">Nauczyciel</option>
          </Form.Select>
        </Col>
        <Row>
          <Col md="12"><Button variant="warning" onClick={moreFilters}>Więcej filtrów</Button></Col>
        </Row>
        {showFilters ? (<MoreFilters/>):""}
      </Row>
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
