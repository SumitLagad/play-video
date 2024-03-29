import axios from 'axios';

const KEY = "API_ACCESS_KEY";

export default axios.create(
    {
        baseURL: "https://www.googleapis.com/youtube/v3",
        params:{
            key : KEY,
            part : "snippet",
            maxResults: 5
        }
    }
)