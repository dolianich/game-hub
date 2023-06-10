import axios from "axios";

export default  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0c148c41068b42c392e470900ffb0a10'
    }
})