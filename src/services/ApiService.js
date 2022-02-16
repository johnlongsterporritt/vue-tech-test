import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    timeout: 5000,
    headers: {'Authorization': import.meta.env.VITE_API_KEY}
});

export async function getImages() {
    return instance.get('search?query=people')
        .then(res => res)
        .catch(err => console.error(err))
}