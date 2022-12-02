import axios from 'axios';

export const addUser = async (user) => {
  try {
    return await axios.post(`http://localhost:5000/users`, user);
  } catch (err) {
    return err.response.data;
  }
};

export const login = async (user) => {
  try {
    return await axios.post('http://localhost:5000/users/login', user);
  } catch (err) {
    return err.response.data;
  }
};

export const getUserAnnoucements = async (id) => {
  try {
    return await axios.get(
      `http://localhost:5000/annoucements/userAnnoucements/${id}`
    );
  } catch (err) {
    return err.response;
  }
};

export const updateUser = async (id, data) => {
  try {
    return await axios.patch(`http://localhost:5000/users/${id}`, data);
  } catch (err) {
    return err.response;
  }
};

export const getUserData = async (id) => {
  try {
    return await axios.get(`http://localhost:5000/users/${id}`);
  } catch (err) {
    return err.response;
  }
};
