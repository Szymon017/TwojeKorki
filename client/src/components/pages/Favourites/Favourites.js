import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useRef } from 'react';
import { getCurrentUser } from "../../../service/userDataService";
import { getAnnoucementById } from "../../../service/announcementService";
import OneAnnounce from "../Annoucements/OneAnnounce";

export default function Favourites() {
  const [user, setUser] = useState(getCurrentUser());
  const [favouriteAnnoucements, setFavouriteAnnoucements] = useState([]);
  const annSet = useRef(false)
  
  const setFullDataToFavourites = async (id) => {
    const result = await getAnnoucementById(id);
      const data = result.data.data.annoucement;
      setFavouriteAnnoucements(favouriteAnnoucements => [...favouriteAnnoucements, data])
    
  }

  useEffect(() => {
    //if jest tymczasowy podczas implementacji, bo inaczej useEffect uruchamia się dwa razy przez <React.StrictMode> w index.js
    if(annSet.current) return;
      user.favourites.map((fav) => {
        setFullDataToFavourites(fav);
      })
      annSet.current = true;
      
    
  }, [])

  return (
    <>
      <Container >
        <h1>Ulubione ogłoszenia</h1>
        <Row>
          <Col>
          {favouriteAnnoucements ? (favouriteAnnoucements.map((fav) => (
              <OneAnnounce announce={fav}/>
            ))):""
          }

          </Col>
        </Row>
      </Container>
    </>
  );
}
