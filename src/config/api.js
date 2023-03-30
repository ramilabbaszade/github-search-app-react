import axios from 'axios'

export const apiUrl = "https://api.github.com"  // must be written in .env file

const headers = {
    'Accept': 'application/json',
};

const API = axios.create({
    baseURL: apiUrl,
    timeout: 0,
    headers: headers
});

API.interceptors.request.use((config) => {
    // Auth token check can be written below
    // config.headers.Authorization = "Bearer " + store.getState().authReducer.token;

    return config
}, (error) => {
    return Promise.reject(error)
})

const errorHandler = async error => {
    if (!error.response) return Promise.reject(error);

    if (error.response.status === 422) {
        // window.location = '/login';
    }

    return Promise.reject(error);
};

const responseHandler = response => {
    if (response.status === 200) {
        // success status below
        // console.log("200 success")
    }
    return response.data;
};

API.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);

export default API;