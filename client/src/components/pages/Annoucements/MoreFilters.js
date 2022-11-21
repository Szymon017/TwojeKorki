import react from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';

export default function MoreFilters() {
    return <>
        <Container>
            <Row>
                <Col md={2}>Cena</Col>
                <Col md={3}>Lokalizacja</Col>
                <Col md={3}>Rodzaj ogłoszenia</Col>
                <Col>Sortuj według</Col>
            </Row>
            <Row>
                <Col md={1}><Form.Control
                    type="text"
                    id="minPrice"
                /></Col>
                <Col md={1}>
                    <Form.Control
                        type="text"
                        id="maxPrice"
                    />
                </Col>
                <Col md={3}>
                    <Form.Control
                        type="text"
                        id="localization"
                    />
                </Col>
                <Col md={3}>
                    <Form.Select aria-label="Default select example">
                        <option>Kategoria</option>
                        <option value="1">Korepetytor</option>
                        <option value="2">Uczeń</option>
                    </Form.Select>
                </Col>
                <Col md={2}>
                    <Form.Select aria-label="Default select example">
                        <option>Kategoria</option>
                        <option value="1">Cena rosnąco</option>
                        <option value="2">Cena malejąco</option>
                        <option value="3">Najdroższe</option>
                        <option value="3">Najtańsze</option>
                    </Form.Select>
                </Col>
            </Row>
        </Container>
    </>
}