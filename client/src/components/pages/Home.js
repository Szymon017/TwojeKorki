import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import { getCurrentUser } from '../../service/userService';
import { useState, useContext } from 'react';
import { UserContext } from '../../App';

export default function Home() {
    const {userData, setUserData} = useContext(UserContext);
    return <>
    <div class="text-justify">
        <h1 class="text-justify">Witaj na stronie TwojeKorki.pl</h1>
        <Link to="/register"> Zarejestruj się aby w pełni korzystać z serwisu!</Link>
        <p>Masz już konto? <Link to="/login">Zaloguj się tutaj</Link></p>
    </div>
    </> 
}