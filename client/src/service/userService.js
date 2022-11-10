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

export const logout = () => {
    localStorage.removeItem("jwt");
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export const tokenIsValid = async(token) => {
    try{
        return await axios.post('http://localhost:5000/users/tokenIsValid',
        null, 
        {headers: {"auth-token": token}}
        )
    }catch(err){
        console.log(err);
    }
}

export const getProfile = async(token) => {
    try{
        return await axios.get('http://localhost:5000/users/profile', {
            headers: {"auth-token": token}
        });
    }catch(err) {
        console.log(err);
    }
}

