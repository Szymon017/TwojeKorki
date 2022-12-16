import axios from 'axios'

export const getUserMessages = async (id) => {
    try {
        return await axios.get(
            `http://localhost:5000/messages/${id}`
        );
    } catch (err) {
        return err.response;
    }
};

export const sendMessage = async (id, message) => {
    try {
        return await axios.patch(
            `http://localhost:5000/messages/${id}`, message
        );
    } catch (err) {
        return err;
    }
}