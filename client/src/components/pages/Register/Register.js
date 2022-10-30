import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useState } from "react";
import { addUser } from '../../../service/userService.js'
import axios from 'axios';

export default function Register() {
    const initialState = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        sex: "Male",
        rating: 0,
        telephone: "",
        role: 0,
        lastSeen: Date.now()
    }

    const [user, setUser] = useState(initialState);
  
    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name] : value
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
       
        try{            
            addUser(user);
        }catch(err){
            console.log(err);
        }
    }
    return (
    <div className="registerContainer my-5 text-center">
        <h1 className="row-md-3 text-center">Rejestracja</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Adres email</label>
            <input
                name="email" 
                type="email" 
                required
                onChange={handleChange} 
                className="form-control" />
        </div>
        <div className="form-group">
            <label>Hasło</label>
            <input
                name="password"
                type="password"
                required
                onChange={handleChange}
                className="form-control"
            />
        </div>
        <div className="form-group">
            <label>Imię</label>
            <input
                name="firstName"
                type="text"
                required
                onChange={handleChange}
                className="form-control"
        />
        </div>
        <div className="form-group">
            <label>Nazwisko</label>
            <input
                name="lastName"
                type="text"
                required
                onChange={handleChange}
                className="form-control"
            />
        </div>
        <label>Płeć</label>
        <div className="form-check">
            <label>Kobieta</label>
            <input
                type="radio"
                class="form-check-input"
                id="sex"
                name="sex"
                value="Female"
                onChange={handleChange}
                checked
            />
        </div>
        <div className="form-check">
            <label>Mężczyzna</label>
            <input
                type="radio"
                class="form-check-input"
                id="sex"
                name="sex"
                value="male"
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Numer telefonu</label>
            <input
                name="telephone"
                type="number"
                required
                className="form-control"
                onChange={handleChange}
            />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Zarejestruj się
        </button>
      </form>
    </div>
  );
}
