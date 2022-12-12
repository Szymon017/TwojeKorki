import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { getBannedUsers, updateUser } from "../../../service/userService";
import { Button, Container, Form } from "react-bootstrap";
export default function BannedUsers() {

    const [ bannedUsers, setBannedUsers ] = useState();

    const getUsersWithBan = async() => {
        try{
            const result = await getBannedUsers()
            setBannedUsers(result.data.data.result);
            console.log(result.data.data.result);
        }catch(error) {
            console.log(error);
        } 
    }

    const unbanUser = async (id) => {
        const unban = { status: { isBanned: false, cause: "" } };
        try{
            const result = await updateUser(id, unban);
            setBannedUsers((current) =>
            current.filter((fruit) => fruit._id !== id)
          );
            console.log(bannedUsers);
        }catch(err){
            console.log(err);
        }  
      };

    useEffect(() => {
        getUsersWithBan();
    }, []);

    return(
        <>
          <div>
            <h1>Zablokowani użytkownicy</h1>
            <Table striped bordered hover>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Imię</th>
                  <th scope="col">Nazwisko</th>
                  <th scope="col">Adres email</th>
                  <th scope="col">Płeć</th>
                  <th scope="col">Ostatnio zalogowany</th>
                  <th scope="col">Powód blokady</th>
                  <th scope="col">Działanie</th>
                </tr>
              </thead>
              <tbody className="table-striped">{
                bannedUsers ? bannedUsers.map((item) => (
                    <tr key={item.firstName}>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.sex}</td>
                      <td>{item.lastSeen}</td>
                      <td>{item.status.cause}</td>
                      <td><Button onClick={() => {unbanUser(item._id)}}>Odblokuj</Button></td>
                      
                     
                    </tr>
                  ))
                :<tr></tr>}
              </tbody>
            </Table>
          </div>
        </>
      );
}