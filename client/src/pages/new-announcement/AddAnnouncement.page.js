import React, { useEffect, useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { AddAnnouncementForm } from "../../components/add-announcement-form/AddAnnouncementForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { shortText } from "../../utils/validation";


const initialFrmDt = {
    subject: "",
    issueDate: "",
    description: "",
};
const initialFrmError = {
    subject: false,
    issueDate: false,
    description: false,
};

export const AddAnnoucement = () => {

    
    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataErro, setFrmDataErro] = useState(initialFrmError);
    
    useEffect(() => {}, [frmData, frmDataErro]);

    const handleOnchange = (e) => {
        
        const {name, value} = e.target;

        


        setFrmData({
            ...frmData,
            [name]: value,
        });

       
    };

    const handleOnSubmit = async (e) =>
    {
        e.preventDefault();
        
        setFrmDataErro(initialFrmError)

        const isSubjectValid = await shortText(frmData.subject)

        setFrmDataErro({
            ...initialFrmError,
            subject: !isSubjectValid,
        });

        console.log('Form submit request recieved', frmData);
    };

    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="New Announcement" />
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <AddAnnouncementForm 
                    handleOnchange={handleOnchange}
                    handleOnSubmit={handleOnSubmit}
                    frmDt = {frmData}
                    frmDataErro = {frmDataErro}
                    
                    />
                </Col>
            </Row>
        </Container>
    )
}