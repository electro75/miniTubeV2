import axios from 'axios';

const KEY = 'AIzaSyA_HCkF1Y3LaCIQc2_lxUMXo4zeydEnBkg';

export default axios.create({
    baseURL : `https://www.googleapis.com/youtube/v3`,    
    params: {
        part: "snippet",
        type: "video",
        maxResult: 5,
        key: KEY
    }
})