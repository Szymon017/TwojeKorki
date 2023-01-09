import axios from "axios"

export const getAllReports = async () => {
    try {
        return await axios.get(`http://localhost:5000/reports`)
    } catch (error) {
        return error
    }
}

export const addNewReport = async(data) => {
    try{
        return await axios.post('http://localhost:5000/reports', data)
    } catch (error) {
        return error
    }
}