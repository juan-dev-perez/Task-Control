import axios from 'axios';

const PORT = process.env.PORT || 8181;
const URL = process.env.RAILWAY_STATIC_URL || 'http://localhost';

export const getAll = async () => 
    await axios.get(`${URL}:${PORT}/tasks`);

export const getOne = async id => 
    await axios.get(`${URL}:${PORT}/tasks/${id}`);

export const createTask = async data => 
    await axios.post(`${URL}:${PORT}/tasks`, data);

export const updateTask = async (id, data) => 
    await axios.put(`${URL}:${PORT}/tasks/${id}`, data);

export const checkTaskDone = async (id, done) => 
    await axios.put(`${URL}:${PORT}/tasks/${id}`, { done } );

export const deleteTask = async id => 
    await axios.delete(`${URL}:${PORT}/tasks/${id}`);