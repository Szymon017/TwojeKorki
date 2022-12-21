import { Link, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import img from './../../../assets/images/a1.jpg';
import { getCurrentUser } from '../../../service/userDataService';
import { getAnnoucementById } from '../../../service/announcementService';
import Rating from '../Rating/Rating';
import { Button, Container, Form } from 'react-bootstrap';
import { sendNewMessage } from '../../../service/messageService';
export default function Annouce() {
  const params = useParams();
  const { _id } = params;
  const [contactIsTrue, setContactIsTrue] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const [annouce, setAnnouce] = useState({});
  const [author1, setAuthor] = useState({});
  const [message, setMessage] = useState();

  const getAnn = async () => {
    const result = await getAnnoucementById(_id);
    const data = result.data.data.annoucement;
    setAnnouce(data);
    setAuthor(data.author);
  };

  const handleChange = async (e) => {
    const { value } = e.target;
    setMessage({
      ...message,
      value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageToBeSend = {
      "userA": user._id,
      "userB": author1._id,
      "messages": {
        "sender": user._id,
        "message": message.value
      }
    }
    try {
      const res = await sendNewMessage(messageToBeSend)
      setContactIsTrue(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAnn();
  }, [user]);

  return (
    <div>
      <Card style={{ background: 'rgb(245, 225, 203)' }}>
        <Container className="w-auto p-3 AnnounceInfo my-3 justify-content-center">
          <Row className="g-0  w-100 p-4">
            <Col sm={12} md={12} lg={12} className="fs-5 fw-bold">
              <Card.Title>
                <h1>{annouce.title}</h1>
              </Card.Title>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <Card.Text>
                <h4>Kategoria: {annouce.category}</h4>
              </Card.Text>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <h4>Opis ogłoszenia</h4>
              <Card.Text>{annouce.description}</Card.Text>
            </Col>
            <Col sm={12} md={9} lg={10} className="fs-5 fw-bold">
              <Card.Text>Lokalizacja: {annouce.location}</Card.Text>
            </Col>
            <Col sm={12} md={3} lg={2} className="text-end fs-5 fw-bold">
              <Card.Text>{annouce.price}zł/godz</Card.Text>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <div className="d-grid gap-2 mt-3">
                {author1._id != user._id ? (
                  !contactIsTrue ? (
                    <Button variant="warning" size="lg" onClick={() => { setContactIsTrue(true) }}>
                      Skontaktuj się
                    </Button>
                  ) : (
                    <Form>
                      <Col>
                        <input type='text'
                          name="message"
                          onChange={handleChange}
                          className="form-control"></input>
                        <Button variant='success' onClick={handleSubmit}>Wyślij</Button>
                      </Col>
                    </Form>
                  )
                ) : ""}
              </div>
            </Col>
          </Row>
        </Container>

        <Row>
          <Container className=" my-3 justify-content-center">
            <Row className="g-0">
              {/* Leftbar*/}
              <Col sm={11} md={11} lg={4} className=" profileLeftPanel">
                <Row>
                  <img src={img} className="profilePhoto"></img>
                </Row>
                <Row className="my-3">
                  <h2>
                    {annouce.author ? (
                      <b>
                        {' '}
                        {annouce.author.firstName +
                          ' ' +
                          annouce.author.lastName}
                      </b>
                    ) : (
                      ''
                    )}
                  </h2>
                  <h5>
                    {annouce.author ? <b> {annouce.author.email}</b> : ''}
                  </h5>
                  <h5>
                    {annouce.author ? <b> {annouce.author.telephone}</b> : ''}
                  </h5>
                  <h5>
                    <span>
                      <Rating
                        rating={author1.rating}
                        numReviews={author1.numReviews}
                      />
                    </span>
                  </h5>
                  <Link to={`/userGuestProfil/${author1._id}`}>
                    <button className="btn btn-dark">Zobacz profil</button>
                  </Link>
                </Row>
              </Col>
              {/* middle + rightbar*/}
              <Col sm={11} md={11} lg={7} className="profileMiddlePanel">
                <h1>Opis użytkownika</h1>
                <h6>
                  {annouce.author ? <b> {annouce.author.description}</b> : ''}
                </h6>
              </Col>
            </Row>
          </Container>
        </Row>
      </Card>
    </div>
  );
}
