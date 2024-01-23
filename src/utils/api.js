import axios from "axios";


const BASE_URL = "https://api.themoviedb.org/3"
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWYzZWFiMzdkODllNzEyZmQ4NDhjZDRjMmJjNjk3NCIsInN1YiI6IjY1OWY2ZTA1YTg0M2MxMDEyMTcxOGQxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aLK4RU-JVxEmX3V7FUWoUgbi6TH_iFsoK-51Pb1T5Uk"
const headers = {
    Authorization: 'bearer '+ TMDB_TOKEN,    
};
export const fetchDataFromApi = async (url, params) =>{
    try {
        const {data} = await axios.get( BASE_URL + url, {
            headers:headers,
            params:params
        })    
        return data;
        
    } catch (err) {
        // console.log(err);
        return err;
    }
}