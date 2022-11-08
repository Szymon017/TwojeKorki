import axios from 'axios';

export const addUser = async (user) => {
    try{
        return await axios.post(`http://localhost:5000/users`, user)
    }catch(err){
        return err.response.data;
    }
}

export const login = async (user) => {
    try {
        return await axios.post('http://localhost:5000/users/login', user)
    } catch (err) {
        return err.response.data;
    }
}

