import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { getAllReports } from "../../../service/reportService"
import { Table, Button } from "react-bootstrap";
import Annouce from "../Announce-info/Announce";
export default function Reports() {
    const [reports, setReports] = useState();
    useEffect(() => {
        getReports();
    }, [])

    const getReports = async() => {
        try {
            const result = await getAllReports();
            setReports(result.data.result);
            console.log(reports);
          } catch (error) {
            console.log(error);
          }
    }
    
    return(
        <>
        <h1>Zgłoszenia</h1>
        <Table striped bordered hover>
        <thead className="thead-dark"> 
        <tr>
              <th scope="col">Zgłaszający</th>
              <th scope="col">Powód</th>
              <th scope="col">Ogłoszenie</th>
              <th scope="col">Działanie</th>
            </tr>
        </thead>
        <tbody className="table-striped">{reports && reports.map((item) => (
            <tr>
                <td>{item.reportingPerson.firstName +" "+ item.reportingPerson.lastName}</td>
                <td>{item.reportMessage}</td>
                <td>
                <Link to={`/announcement/${item.annoucementId}`}>
                  <Button variant="warning">Wejdz do ogloszenia</Button>
                </Link></td>
                <td><Button variant='danger'>Zablokuj użytkownika</Button></td>
            </tr>
            ))}

        </tbody>

        
        </Table>
            
        </>
    )
}