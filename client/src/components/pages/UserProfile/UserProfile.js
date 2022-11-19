import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import img from '../../../assets/images/a1.jpg';
import './style.css';
import { getCurrentUser } from '../../../service/userDataService';
import { getUserAnnoucements } from '../../../service/userService';

export default function UserProfile() {
  const [user, setUser] = useState(getCurrentUser());
  const [annoucements, setAnnoucements] = useState();


  const getAnn = async () =>{
    const result = await getUserAnnoucements(user._id)
    setAnnoucements(result.data)
  }



  return (
    <div>
      <h1 className="my-3">Profil użytkownika {user.firstName}</h1>
      <Container className=" my-5 justify-content-center">
        <Row>
          {/* Leftbar*/}
          <Col md={4} className='profileLeftPanel'>
            <Row>
              <img src={img} className='profilePhoto'></img>
            </Row>
            <Row className="my-3">
                <h2>{user.firstName+" "+user.lastName}</h2>
                <h5>{user.email}</h5>
                <h5>{user.telephone}</h5>
                <button>Edytuj dane</button>
            </Row>
          </Col>
          {/* middle + rightbar*/}
          <Col md={7} className='profileMiddlePanel'>
            <Row>
              <h2>Uzytkownik nie zamieścił o sobie zadnych informacji</h2>
              <button onClick={getAnn}>Zobacz ogłoszenia użytkownika</button>
              {annoucements?(

                annoucements.map((ann) => (
                  <p>{ann.title + " " + ann.category + " " + ann.option}</p>
                  ))
                  ):""}
            </Row>

            <Row>
              
            </Row>

            <Row></Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
