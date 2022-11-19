import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import './style.css';
export default function Home() {
  return (
    <>
      <Container className='homeLogo'>
        <Row>
            <Col className='homeLogo'>
                <h1>Witaj na stronie</h1>
            </Col>
        </Row>
        <Row>
            <Col>
            <h1 className='homeLogo2'>TwojeKorki</h1>
            </Col>
        </Row>
        <Row>
            <Col>
            <h4 className='homeLogo2'>Potrzebujesz pomocy z zadaniem? Nie rozumiesz matematyki?</h4>
            <h4 className='homeLogo2'>Trafiłeś w idealne miejsce! </h4>
            <h4 className='homeLogo2'> <Link to="/register"> Zarejestruj się aby w pełni korzystać z serwisu!</Link></h4>
            <h4 className='homeLogo2'>Masz już konto? <Link to="/login">Zaloguj się tutaj</Link></h4>
            
            </Col>
        </Row>
      </Container>
    </>
  );
}
