import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { getCurrentUser } from "../../../service/userDataService";
import { getAnnoucementById } from "../../../service/announcementService";

export default function Favourites() {
  const [user, setUser] = useState(getCurrentUser());
  const [annoucements, setAnnoucements] = useState([{}]);

  useEffect(() => {
    user.favourites.map((fav) => {
      const res = getAnnoucementById(fav);
      res.then((obj) => {
        console.log(obj.data.data.annoucement);
        setAnnoucements({...annoucements, "x":[obj.data.data.annoucement]})
      })
    })
    console.log(annoucements);
  }, [])

  useEffect(()=>{
    console.log(annoucements);
  },[annoucements])
  return (
    <>
      <Container className='homeLogo'>
        <h1>Ulubione ogłoszenia</h1>
        <Row>
          <Col>
            {user.favourites.map((fav) => (
              <p>{fav}</p>
            ))}

          </Col>
        </Row>
      </Container>
    </>
  );
}
