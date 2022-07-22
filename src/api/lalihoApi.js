import axios from "axios";

export default axios.create({
    baseURL: 'https://laliho-api.herokuapp.com/'
})