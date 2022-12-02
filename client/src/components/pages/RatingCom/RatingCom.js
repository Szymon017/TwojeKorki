import Rating2 from '../Rating/Rating2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function RatingCom(props) {
  const { rating, firstName, lastName, comment } = props;
  return (
    <div>
      <Container
        className="ratingComPanel my-3 justify-content-center"
        style={{ background: 'rgb(245, 225, 203)' }}
      >
        <Row className='w-100 p-3'>
          <Col className="fw-bolder" sm={6} md={6} lg={6}>
            <h3>{firstName}{' '}{lastName}</h3>
          </Col>
          
          <Col className="text-end" sm={6} md={6} lg={6}>
            <Rating2 rating={rating} />
          </Col>
          <Col sm={12} md={12} lg={12}>
            <h5>Komentarz</h5>
            {comment}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
