import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import img from "../../../assets/images/a1.jpg";
import "./style.css";
import { getCurrentUser } from "../../../service/userDataService";
import { getUserAnnoucements } from "../../../service/userService";

export default function UserProfile() {
  const [user, setUser] = useState(getCurrentUser());
  const [annoucements, setAnnoucements] = useState();

  const getAnn = async () => {
    const result = await getUserAnnoucements(user._id);
    setAnnoucements(result.data);
  };

  useEffect(() => {
    getAnn();
  }, [user]);

  return (
    <div>
      <h1 className="my-3">Profil użytkownika {user.firstName}</h1>
      <Container className=" my-5 justify-content-center">
        <Row>
          {/* Leftbar*/}
          <Col md={4} className="profileLeftPanel">
            <Row>
              <img src={img} className="profilePhoto"></img>
            </Row>
            <Row className="my-3">
              <h2>{user.firstName + " " + user.lastName}</h2>
              <h5>{user.email}</h5>
              <h5>{user.telephone}</h5>
              <button className="btn btn-dark">Edytuj dane</button>
            </Row>
          </Col>
          {/* middle + rightbar*/}
          <Col md={7} className="profileMiddlePanel">
            <Row>
              <Col>
                <button onClick={getAnn} className="btn btn-dark">
                  Zobacz ogłoszenia użytkownika
                </button>
              </Col>
              <Col>
                <button onClick={getAnn} className="btn btn-dark">
                  Zobacz opinie o użytkowniku
                </button>
              </Col>
            </Row>
              {annoucements ? (
                annoucements.map((ann) => (
                  <Row>
                    <Col><p className='annoucementTile'>{ann.title}</p></Col>
                    <Col><p className='annoucementTile'>{ann.category}</p></Col>
                    <Col><p className='annoucementTile'>{ann.option}</p></Col>
                  </Row>
                ))
              ) : (
                <h2>Brak dostepnych informacji</h2>
              )}
            

            <Row></Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
