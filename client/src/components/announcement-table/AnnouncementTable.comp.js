import React from "react";
import {Table} from "react-bootstrap";
import PropTypes from 'prop-types';


export const AnnouncementTable = ({announcements}) => {
    return <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Przedmiot</th>
                <th>Opis</th>
                <th>Lokalizacja</th>
            </tr>
        </thead>
        <tbody>
            {announcements.length ? (
            announcements.map((row)=>(
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.subject}</td>
                <td>{row.description}</td>
                <td>{row.location}</td>
            </tr>
            ))) : (
            <tr>
                <td colSpan={4} className="text-center">
                    Brak ogłoszeń do pokazania!{" "}
                </td>
                
            </tr>
            )   
            }
        </tbody>
    </Table>
    
}

AnnouncementTable.propTypes = {
    announcements: PropTypes.array.isRequired,
};