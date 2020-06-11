import axios from 'axios';


const api=axios.create({
    baseURL:'http://10.128.83.20:3333'
});

export default api;