import axios from 'axios';

const URL = process.env.URL_SERVER || 'http://localhost:8080';

export const getAll = async () => 
    await axios.get(`${URL}/tasks`);

export const getOne = async id => 
    await axios.get(`${URL}/tasks/${id}`);

export const createTask = async data => 
    await axios.post(`${URL}/tasks`, data);

export const updateTask = async (id, data) => 
    await axios.put(`${URL}/tasks/${id}`, data);

export const checkTaskDone = async (id, done) => 
    await axios.put(`${URL}/tasks/${id}`, { done } );

export const deleteTask = async id => 
    await axios.delete(`${URL}/tasks/${id}`);