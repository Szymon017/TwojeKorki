import { useEffect, useState } from "react"
import { getAllReports } from "../../../service/reportService"
import { Table } from "react-bootstrap";
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
        <Table striped bordered hover>
        <thead className="thead-dark"> 
        <tr>
              <th scope="col">Zgłaszający</th>
              <th scope="col">Powód</th>
              <th scope="col">Ogłoszenie</th>
            
            </tr>
        </thead>
        <tbody className="table-striped">{reports && reports.map((item) => (
            <tr>
                <td>{item.reportingPerson}</td>
                <td>{item.reportMessage}</td>
                <td>{item.annoucementId}</td>
            </tr>
            ))}

        </tbody>

        
        </Table>
            
        </>
    )
}