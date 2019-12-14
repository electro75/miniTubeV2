import axios from 'axios';

const KEY = 'AIzaSyDQ5gFwW2nl1x80v4lCCs79sgNFfpYJ8Y0';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
})