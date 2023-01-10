import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { deleteReport, getAllReports } from "../../../service/reportService"
import { Table, Button } from "react-bootstrap";
import Annouce from "../Announce-info/Announce";
import { getCurrentUser } from "../../../service/userDataService";
import { updateUser } from "../../../service/userService";
import { deleteAnnoucement } from "../../../service/announcementService";

export default function Reports() {
    const [reports, setReports] = useState();
    useEffect(() => {
        getReports();
    }, [])

    const getReports = async () => {
        try {
            const result = await getAllReports();
            setReports(result.data.result);
        } catch (error) {
            console.log(error);
        }
    }

    const banUser = async (item) => {
        const currentUser = await getCurrentUser();
        if (item.annoucementId.author != currentUser._id) {
            const ban = { status: { isBanned: true, cause: item.reportMessage } };
            try {
                const result = await updateUser(item.annoucementId.author, ban);
                const result2 = await deleteReport(item._id);
                const result3 = await deleteAnnoucement(item.annoucementId._id)
                console.log(item.annoucementId._id);
            } catch (err) {
                console.log(err);
            }
            setReports((current) =>
            current.filter((fruit) => fruit._id!== item._id)
          );
        }
    }


    return (
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
                        <td>{item.reportingPerson.firstName + " " + item.reportingPerson.lastName}</td>
                        <td>{item.reportMessage}</td>
                        <td>
                            <Link to={`/announcement/${item.annoucementId}`}>
                                <Button variant="warning">Wejdz do ogloszenia</Button>
                            </Link></td>
                        <td><Button variant='danger' onClick={() => { banUser(item) }}>Zablokuj użytkownika</Button></td>
                    </tr>
                ))}

                </tbody>


            </Table>

        </>
    )
}