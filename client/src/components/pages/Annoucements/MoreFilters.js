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
                        <option value="Teacher">Korepetytor</option>
                        <option value="Student">Uczeń</option>
                    </Form.Select>
                </Col>
                <Col md={2}>
                    {/*Tutaj jeszcze nie wiem jakie wartości value dać, bo asc i desc bedzie dla ceny i daty wiec chwila z tym */}
                    <Form.Select aria-label="Default select example">
                        <option>Kategoria</option>
                        <option value="asc">Cena rosnąco</option>
                        <option value="desc">Cena malejąco</option>
                        <option value="3">Najnowsze</option>
                        <option value="3">Najstarsze</option>
                    </Form.Select>
                </Col>
            </Row>
        </Container>
    </>
}