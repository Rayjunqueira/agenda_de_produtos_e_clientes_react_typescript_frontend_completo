import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-product-api.herokuapp.com'
});

export const useApi = () => ({
    postProduct: async (name: string, price: number, desc: string, stock: number, categories: string) => {
        const response = await api.post('/product', { name, price, desc, stock, categories});
        return response.data;
    },
    getProducts: async () => {
        const response = await api.get('/product');
        return response.data;
    },
    getCategories: async () => {
        const response = await api.get('/category');
        return response.data;
    },
    createCategory: async (name: string) => {
        const response = await api.post('/category', { name });
        return response.data;
    },
    removeCategory: async (id: string) => {
        const response = await api.delete(`/category/${id}`);
        return response.data;
    },
    getProductById: async (id: string | undefined) => {
        const response = await api.get(`/product/${id}`);
        return response.data;
    },
    removeProduct: async (id: string | undefined) => {
        const response = await api.delete(`/product/${id}`);
        return response.data;
    },
    editProduct: async (id: string | undefined, name: string, desc: string, price: number, stock: number, categories: string | undefined ) => {
        const response = await api.put(`/product/${id}`, { name, desc, price, stock, categories });
        return response.data;
    },
    getCustomers: async () => {
        const response = await api.get('/customer');
        return response.data;
    },
    removeCustomer: async (id: string | undefined) => {
        const response = await api.delete(`/customer/${id}`);
        return response.data;
    },
    getCustomertById: async (id: string | undefined) => {
        const response = await api.get(`/customer/${id}`);
        return response.data;
    },
    postCustomer: async (name: string, email: string | undefined,  phone: string | undefined, note: string | undefined) => {
        const response = await api.post('/customer', { name, email, phone, note });
        return response.data;
    },
    editCustomer: async (id: string | undefined, name: string, email: string, phone: string, note: string) => {
        const response = await api.put(`/customer/${id}`, { name, email, phone, note });
        return response.data;
    },
});