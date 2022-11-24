import axios from 'axios';

export const addAnnouncement= async (form) => {
  try {
    return await axios.post(`http://localhost:5000/annoucements`, form);
  } catch (err) {
    return err.response.data;
  }
};

export const getAnnoucements = async(filters) => {
  console.log(filters);
  let url="?";
  if(filters){
    if(filters.category){
      url += `category=${filters.category}&`
    }
    if(filters.location){
      url += `location=${filters.location}&`
    }
    if(filters.option){
      url += `option=${filters.option}&`
    }
    if(filters.minPrice){
      url += `minPrice=${filters.minPrice}&`
    }
    if(filters.maxPrice){
      url += `maxPrice=${filters.maxPrice}&`
    }
    if(filters.sortOption){
      url += `sortOption=${filters.sortOption}`
    }
  }
  console.log(url);
  try{
    return await axios.get(`http://localhost:5000/annoucements${url}`)
  }catch(err){
    return err.response.data;
  }
}