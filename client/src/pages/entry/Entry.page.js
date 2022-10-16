import React, {useState} from "react";

import './entry.style.css';
import {Jumbotron} from 'react-bootstrap';

import {LoginForm }from '../../components/login/Login.comp';
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";


export const Entry = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [frmLoad, setFormLoad] = useState('reset')
    const handleOnchange = (e) => {
        const {name, value} = e.target

        switch(name){
            case 'email': 
                setEmail(value);
                break;
            case 'password': 
                setPassword(value);
                break;
            default:
                break;
        }

        console.log(name, value)
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if(!email || !password)
        {
            return alert("Wypełnij wszystkie pola!");
        }
        //TODO call api to submit the form
        console.log(email, password);
    };

    const handleOnResetSubmit = (e) => {
        e.preventDefault();
        
        if(!email)
        {
            return alert("Proszę wprowadź email!");
        }
        //TODO call api to submit the form
        console.log(email);
    };

    const formSwitcher = (formType) => {
        setFormLoad(formType);
    };

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {frmLoad === 'login' && 
                <LoginForm 
                handleOnchange={handleOnchange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                email = {email}
                pass = {password}
                />}
                {frmLoad === 'reset' &&
                <ResetPassword 
                handleOnchange={handleOnchange}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                email = {email}
                />
                }
            </Jumbotron>
        </div>
    )
}