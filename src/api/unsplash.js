import axios from 'axios'


export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID 2aa5f83172929c1cecc4de6ba78ab1264f67ac6e0e1cd3410948f86f2ca98afc'
    }
})