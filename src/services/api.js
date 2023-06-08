import axios from 'axios';

export default async function API(method, url, body = null, params = null) {
    return await axios.request({
        method,
        url,
        baseURL: "https://fakestoreapi.com",
        params,
        data: body,
    });
}
