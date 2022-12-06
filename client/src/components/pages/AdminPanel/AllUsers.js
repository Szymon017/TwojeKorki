import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { getAllUsers, updateUser, getUserData } from "../../../service/userService";
import { Row, Col } from 'react-bootstrap'
import  Table  from "react-bootstrap/Table";
import './style.css'
export default function AllUsers() {
    const [user, setUsers] = useState([{}]);

    const getUsers = async () => {
        try {
            const result = await getAllUsers();
            setUsers(result.data.data.users);
        } catch (error) {
            console.log(error);
        }

    }

    const banUser = async (id) => {
        const ban = {status: {isBanned: true, cause: "Przykładowy powód bana"}}
        const result = updateUser(id, ban);
        result.then((res) => {
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(() => {
        getUsers();
        console.log(user);
    }, [])
    return (
        <>
            <div>
                <h1>All Users</h1>
                <Table striped bordered hover >
                    <thead className="thead-dark">
                        <tr>
                            <th scope='col'>Imię</th>
                            <th scope='col'>Nazwisko</th>
                            <th scope='col'>Adres email</th>
                            <th scope='col'>Płeć</th>
                            <th scope='col'>Numer telefonu</th>
                            <th scope='col'>Ostatnio zalogowany</th>
                            <th scope='col' colSpan={3}>Opcje</th>
                        </tr>
                    </thead>
                    <tbody className='table-striped'>
                        {user ? (user.map((item) => (

                            <tr scope='row'>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.sex}</td>
                                <td>{item.telephone}</td>
                                <td>{item.lastSeen}</td>
                                <td><Button onClick={() => {banUser(item._id)}}>Zablokuj</Button></td>
                                <td><Button>Zmień permisje</Button></td>
                                <td><Button>Wejdź na profil</Button></td>
                            </tr>


                        ))) : ""}
                    </tbody>
                </Table>
            </div>
        </>
    )
}