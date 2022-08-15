import axios from 'axios';
// import { json } from 'stream/consumers';

export default axios.create({
    baseURL : "http://localhost:3006",
    headers: {
        'Content-Type': 'application/json',
    }
})