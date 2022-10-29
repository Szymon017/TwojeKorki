import React, { useEffect, useState } from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { AnnouncementTable } from "../../components/announcement-table/AnnouncementTable.comp";
import announcements from '../../assets/data/dummy-announcement.json'

export const AnnouncementLists = () => {

    const [str, setStr] = useState('');
    const [dispAnnouncement, setDispAnnouncement] = useState(announcements);


    useEffect(() => {}, [str, dispAnnouncement]);
   


    const handleOnchange = (e) => {
        const {value} = e.target;
        setStr(value);
        searchAnnouncement(value);
    };

    const searchAnnouncement = sttr => {
        const displayAnnouncements =  announcements.filter((row)=> row.subject.toLowerCase().includes(sttr.toLowerCase()));        
        console.log(displayAnnouncements);
        setDispAnnouncement(displayAnnouncements);
    
    };



    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Announcement List"/>
                    
                       
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <Button variant="info">Add New Announcement </Button>
                    
                       
                </Col>
                <Col className="text-right">
                    <SearchForm handleOnchange={handleOnchange} str={str}/>
                    
                       
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <AnnouncementTable announcements={dispAnnouncement}/>
                    
                       
                </Col>
            </Row>
        </Container> 

        
    )
}