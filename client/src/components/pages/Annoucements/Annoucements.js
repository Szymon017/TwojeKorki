import OneAnnounce from './OneAnnounce';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { getAnnoucements } from '../../../service/announcementService';

export default function Annoucements() {
  const [annoucements, setAnnoucements] = useState();

  const getAllAnnoucements = async () => {
    const result = await getAnnoucements();
    console.log(result);
    setAnnoucements(result.data.data.annoucements);
  };

  useEffect(() => {
    getAllAnnoucements();
  }, []);

  return (
    <div>
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
