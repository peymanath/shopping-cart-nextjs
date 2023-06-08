import API from '@/services/api';

export async function GetProducts() {
    return await API('GET', '/products');
}
