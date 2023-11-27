import axios from "axios";

const baseURL = 'https://crudcrud.com/api/e4ae1a0d8f5441069191821e032caa45';

const medicineTable = 'medicines';
const cartTable = 'cart';

export const getCartData = async () => {
    return axios.get(`${baseURL}/${cartTable}`);
}

export const addDataToCart = async (item) => {
    return axios.post(`${baseURL}/${cartTable}`, item);
}

export const deleteDataFromCart = async (_id) => {
    return axios.delete(`${baseURL}/${cartTable}/${_id}`);
}

export const addMedicinesToShop = async(medicine) => {
    return axios.post(`https://crudcrud.com/api/e4ae1a0d8f5441069191821e032caa45/medicines`, medicine);
}

export const getMedicines = async () => {
    return axios.get(`https://crudcrud.com/api/e4ae1a0d8f5441069191821e032caa45/medicines`);
}