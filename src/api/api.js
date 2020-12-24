import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2d8fb7e5-f404-4244-8053-b7559599770a"
    }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
}

export const followUser = (userId) => {
    return instance.post(`follow/${userId}`)
        .then(response => response.data);
}

export const unfollowUser = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(response => response.data);
}