import axios from 'axios';
// import { storeTasksSuccess } from './taskdetailsreducer';
import { storeTasksSuccess } from './taskdetailsreducer';

// Function to fetch data from API
export  async function fetchDataFromAPI (dispatch = ()=>{} ) {

  


    const apiurl = "https://guvi-final-node-2.onrender.com/gettaskdetails";



  try {
    const response = await axios.get(apiurl);


dispatch(storeTasksSuccess(response.data.
  taskdetails));

  } catch (error) {
    throw error;
  }

 
};
fetchDataFromAPI()
