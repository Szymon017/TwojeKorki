import axios from 'axios';

export const addAnnouncement= async (form) => {
  try {
    return await axios.post(`http://localhost:5000/annoucements`, form);
  } catch (err) {
    return err.response.data;
  }
};

export const getAnnoucements = async() => {
  try{
    return await axios.get(`http://localhost:5000/annoucements`)
  }catch(err){
    return err.response.data;
  }
}