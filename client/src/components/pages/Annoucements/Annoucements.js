import data from '../../../assets/data/data';
import OneAnnounce from './OneAnnounce';
import img from './../../../assets/images/a1.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Annoucements() {
  return (
    <div>
      <h1>Ogłoszenia użytkowników</h1>

      <div className="products">
        <Row>
          {data.products.map((product) => (
            <Col key={product.title} sm={12} md={12} lg={12} className="mb-1">
              <OneAnnounce product={product}></OneAnnounce>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
