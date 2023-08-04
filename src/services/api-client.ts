import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8210842d856b44fe9b5fa15c6ea29fe0',
    }
})