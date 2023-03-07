import axios from 'axios';

// const PORT = process.env.PORT || 8181;
// const URL = process.env.RAILWAY_STATIC_URL || 'http://localhost';

export const getAll = async () => 
    await axios.get(`https://deploy-tasks-production.up.railway.app/tasks`);

export const getOne = async id => 
    await axios.get(`https://deploy-tasks-production.up.railway.app/tasks/${id}`);

export const createTask = async data => 
    await axios.post(`https://deploy-tasks-production.up.railway.app/tasks`, data);

export const updateTask = async (id, data) => 
    await axios.put(`https://deploy-tasks-production.up.railway.app/tasks/${id}`, data);

export const checkTaskDone = async (id, done) => 
    await axios.put(`https://deploy-tasks-production.up.railway.app/tasks/${id}`, { done } );

export const deleteTask = async id => 
    await axios.delete(`https://deploy-tasks-production.up.railway.app/tasks/${id}`);