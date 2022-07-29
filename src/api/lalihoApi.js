import axios from "axios";

const lalihoApi = axios.create({
    baseURL: 'https://laliho-api.herokuapp.com/'
})

lalihoApi.interceptors.request.use(req => {
    const token = sessionStorage.getItem("token")

    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }

    return req
})

export default lalihoApi