import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './../../../assets/images/a1.jpg';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../../../service/userDataService';
import { updateUser } from '../../../service/userService';



export default function OneAnnounce(props) {
  const { announce } = props;
  const [ currentUser, setCurrentUser ] = useState(getCurrentUser());
  const [ favourites, setFavourites ] = useState(currentUser.favourites);
  const [ option, setOption ] = useState(false);
  
  useEffect(()=>{
    checkForFavourite();
  }, [])

  const checkForFavourite = () => {
    favourites.map((item)=>{
      if(announce._id === item) setOption(true);
    })
  }

  const addToFavourite = async(id) => {
    const user = getCurrentUser();
    let fav = {favourites: user.favourites};
    console.log(fav);
    let good = true;
    fav.favourites.map((obj) => (
      obj === id ? good = false : ''
    ))
    
    if(user && good){
      setOption(true);

      fav.favourites.push(id)
      const result = await updateUser(user._id, fav)
      if(result.data) {
        localStorage.setItem("token", result.data.token)
      }else{
        console.log("Nie dzioło");
      }
    } 
  }

  const deleteFromFavourite = async(id) => {
    
    const user = getCurrentUser();
    let fav = {favourites: user.favourites};
    console.log(fav);
    let good = false;
    //sprawdzenie czy w array istnieje takie ogłoszenie
    fav.favourites.map((obj) => (
      obj === id ? good = true : ''
    ))
    
    if(user && good){
      const index = fav.favourites.indexOf(id)
      console.log(index);
      fav.favourites.splice(index, 1);
      const result = await updateUser(user._id, fav)
      setOption(true);
      if(result.data) {
        setOption(false);
        localStorage.setItem("token", result.data.token)
      }else{
        console.log("Nie dzioło");
      }
    } 
  }

  return (
    <Card style={{ background: 'rgb(245, 225, 203)' }}>
      <Row className="g-0">
        <Col md={2}>
          <Row className="g-0">
            <Col md={12} className="d-flex justify-content-center ">
              <Link to={`/announcement/${announce._id}`}>
                <img
                  className="img-fluid rounded-start"
                  src={img}
                  alt={announce.option}
                ></img>
              </Link>
            </Col>
            <Col md={12} className="d-flex justify-content-center">
              {announce.author ? (<b> {announce.author.firstName + " " + announce.author.lastName}</b>) : ""}
            </Col>
          </Row>
        </Col>
        <Col md={10}>
          <Card.Body>
            <Row className="g-0">
              <Col md={12}>
                <Card.Title>{announce.title}</Card.Title>
              </Col>
              <Col md={12}>
                <Card.Text>{announce.description}</Card.Text>
              </Col>
              <Col md={6} className=" fw-bold">
                <Card.Text>{announce.location} </Card.Text>
              </Col>
              <Col md={6} className="text-end fs-5 fw-bold ">
                {' '}
                <Card.Text> {announce.price} zł/godz</Card.Text>
              </Col>

              <Col className="">
                <Link to={`/announcement/${announce._id}`}>
                  <Button variant="warning">Wejdz do ogloszenia</Button>
                </Link>
                {option? (
                  <Button variant="success" onClick={() => {deleteFromFavourite(announce._id)}}>
                  <i class="bi bi-heart-fill"></i>
                </Button>
                ):(<Button variant="danger" onClick={() => {addToFavourite(announce._id)}}>
                <i class="bi bi-heart-fill"></i>
              </Button>)}
                
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
