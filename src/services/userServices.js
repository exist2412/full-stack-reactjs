import axios from "axios";

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const get_all_users = (inputId) => {
    return axios.get(`/api/get-list-users?id=${inputId}`);
}

export { handleLoginApi, get_all_users }