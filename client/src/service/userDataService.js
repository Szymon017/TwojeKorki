import jwt_decode from 'jwt-decode';
const getCurrentUser = () => {
    const decoded = jwt_decode(localStorage.getItem("token"));
    if(decoded.id){
        return decoded.id
    }else{
        return "No current user available";
    }
}

export {
    getCurrentUser
}