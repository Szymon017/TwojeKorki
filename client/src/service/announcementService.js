import axios from 'axios';

export const AddAnnoucement = async (annoucement) => {
    try{
        return await axios.post(`http://localhost:5000/users`, annoucement)
    }catch(err){
        return err.response.data;
    }
}

