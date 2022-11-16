import axios from 'axios';

export const addAnnouncement= async (form) => {
  try {
    return await axios.post(`http://localhost:5000/annoucements/add`, form);
  } catch (err) {
    return err.response.data;
  }
};
