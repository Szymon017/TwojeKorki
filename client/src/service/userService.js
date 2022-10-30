import axios from 'axios';

export const addUser = async (user) => {
    try{
        return await axios.post(`http://localhost:5000/users`, user);
    }catch(err){
        console.log(err.message);
    }
}

