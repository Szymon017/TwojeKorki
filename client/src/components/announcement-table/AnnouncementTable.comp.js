import React from "react";
import {Table} from "react-bootstrap";

export const AnnouncementTable = () => {
    return <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Przedmiot</th>
                <th>Ogłaszajacy</th>
                <th>Data</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Matematyka</td>
                <td>Jan Kowalski</td>
                <td>05-10-2022</td>
            </tr>
        </tbody>
    </Table>
    
}