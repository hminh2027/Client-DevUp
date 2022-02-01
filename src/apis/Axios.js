import axios from 'axios'

const domainServer = 'https://nodejs-dev-up.herokuapp.com/'

export const postAPI = async (url, data, token) => {
    const res = await axios.post(`${domainServer}/api/${url}`, data, {
        headers: { Authorization: token}
    })
    return res
}

export const getAPI = async (url, token) => {
    const res = await axios.get(`${domainServer}/api/${url}`, {
        headers: {Authorization: token}
    })
    return res
}

export const putAPI = async (url, data, token) => {
    const res = await axios.put(`${domainServer}/api/${url}`, data, {
        headers: {Authorization: token}
    })
    return res
}

export const patchAPI = async (url, data, token) => {
    const res = await axios.patch(`${domainServer}/api/${url}`, data, {
        headers: {Authorization: token}
    })
    return res
}

export const deleteAPI = async (url, token) => {
    const res = await axios.delete(`${domainServer}/api/${url}`, {
        headers: {Authorization: token}
    })
    return res
}
