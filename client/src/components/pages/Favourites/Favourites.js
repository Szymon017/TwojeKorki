import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { getCurrentUser } from "../../../service/userDataService";

export default function Favourites() {
    const [user, setUser] = useState(getCurrentUser());
    const [favourites, setFavourites] = useState({})

    useEffect(() => {
        const tok = localStorage.getItem("token")
        console.log(tok);

    }, [])


  return (
    <>
      <Container className='homeLogo'>
        <h1>Ulubione ogłoszenia</h1>
        <Row>
            <Col>
            {user.favourites.map((fav) => (
                <p>{fav.title}</p>
            ))}
            
            </Col>
        </Row>
      </Container>
    </>
  );
}
