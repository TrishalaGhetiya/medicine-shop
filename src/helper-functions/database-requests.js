import axios from "axios";

const baseURL = 'https://crudcrud.com/api/9a8856845e6b47c588df256215379adc';

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

export const addMedicinesToShop = async(product) => {
    return axios.post(`${baseURL}/${medicineTable}`, product);
}

export const getMedicines = async () => {
    return axios.get(`${baseURL}/${medicineTable}`);
}