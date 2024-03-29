import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import {
  getAllUsers,
  updateUser,
  getUserData,
} from "../../../service/userService";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./style.css";
import { getCurrentUser } from "../../../service/userDataService";

export default function AllUsers() {
  const [user, setUsers] = useState();
  const [showForm, setShowForm ] = useState();
  const [ cause, setCause ] = useState("");

  const getUsers = async () => {
    try {
      const result = await getAllUsers();
      setUsers(result.data.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const unbanUser = async (id) => {
    const unban = { status: { isBanned: false, cause: "" } };
    try{
        const result = await updateUser(id, unban);
        setShowForm(false)
        getUsers();
    }catch(err){
        console.log(err);
    }
   
  };

  const banUser = async (id) => {
    const currentUser = getCurrentUser();
    if(id != currentUser._id){
      const ban = { status: { isBanned: true, cause: cause.value } };
      try{
        const result = await updateUser(id, ban);
        setShowForm()
        setCause();
        getUsers();
      }catch(err) {
        console.log(err);
      }
    }
   
  };
  
  const handleChange = e => {
    const { value } = e.target;
    setCause({
        ...cause,
         value
    })
    console.log(cause);
}

  const showBanForm = (id) => {
    setShowForm(id);
  }

  const getPromoted = async(id, role) => {
    const currentUser = getCurrentUser();
    if(id != currentUser._id){
      let newRole = {}
      if(role === "user") {
        newRole = {"role": "mod"};
      }
      if(role === "mod") {
        newRole = {"role": "admin"};
      }
      
      try{
        const result = await updateUser(id, newRole);
        getUsers();
      }catch(err){
        console.log(err);
      }
    }
  }
    
    const degrade = async(id, role) => {
      const currentUser = getCurrentUser();
      if(id != currentUser._id){
          let newRole = {}
        if(role === "admin") {
          newRole = {"role": "mod"};
        }
        if(role === "mod") {
          newRole = {"role": "user"};
        }

        try{
            const result = await updateUser(id, newRole);
            getUsers();
        }catch(err){
            console.log(err);
        }
      }
    }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div>
        <h1>Wszyscy użytkownicy</h1>
        <Table striped bordered hover>
          <thead className="thead-dark">
            <tr>
              <th scope="col">Imię</th>
              <th scope="col">Nazwisko</th>
              <th scope="col">Adres email</th>
              <th scope="col">Płeć</th>
              <th scope="col">Numer telefonu</th>
              <th scope="col">Ostatnio zalogowany</th>
              <th scope="col">
                Opcje
              </th>
              <th scope="col">Rola</th>
              <th colSpan={2}>Działanie</th>
            </tr>
          </thead>
          <tbody className="table-striped">{user ? user.map((item) => (
                  <tr key={item.firstName}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.sex === 'male' ? "Mężczyzna":"Kobieta"}</td>
                    <td>{item.telephone}</td>
                    <td>{(new Date(item.lastSeen).toISOString().replace('T', ' ').split('.')[0])}</td>
                    <td>{item.status.isBanned?
                        <Button variant="success" onClick={() => {unbanUser(item._id);}}>
                            Odblokuj
                        </Button>
                    :
                    (
                        showForm != item._id ?
                        <Button variant="danger" onClick={() => {showBanForm(item._id)}}>
                            Zablokuj
                        </Button> : <Form>
                            <Form.Control type="text" onChange={handleChange}>
                            </Form.Control>
                            <Button variant="danger" onClick={() => {banUser(item._id)}}>Zablokuj</Button>
                            </Form> 
                    )}
                    </td>
                    <td>
                   {item.role}
                  
                    </td>
                    <td> <Button variant="success" onClick={()=>{getPromoted(item._id, item.role)}}>Awansuj</Button></td>
                    <td><Button variant="dark" onClick={()=>{degrade(item._id, item.role)}}>Degraduj</Button></td>
                    <td>
                    <Button>Wejdź na profil</Button>
                    </td>
                  </tr>
                ))
              :<tr></tr>}
          </tbody>
        </Table>
      </div>
    </>
  );
}
