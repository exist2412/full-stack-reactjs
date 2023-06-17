import axios from "axios";

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const get_all_users = (inputId) => {
    return axios.get(`/api/get-list-users?id=${inputId}`);
}

const createUser = (data) => {
    return axios.post('/api/create-user', 
        {
            email: data.email, 
            password: data.password, 
            firstName: data.firstName, 
            lastName: data.lastName, 
            phone: data.phone, 
            address: data.address,
            positionId: data.positionId,
            roleId: data.roleId,
            gender: data.gender
        }
    );
}

const editUser = (data) => {
    return axios.put('/api/edit-user', 
        { data: data }
    );
}

const handleDeleteUser = (userId) => {
    return axios.delete(`/api/delete-user`,
        {
            data: {
                id: userId
            }
        }
    );
}

export { handleLoginApi, get_all_users, createUser, handleDeleteUser, editUser }