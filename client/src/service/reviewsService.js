import axios from "axios"

export const addNewReview = async (review) => {
    try {
        return await axios.post(`http://localhost:5000/reviews`, review)
    } catch (error) {
        return error
    }
}

export const getUserReviews = async (id) => {
    try {
        return await axios.get(`http://localhost:5000/reviews/${id}`)
    } catch (error) {
        return error
    }
}