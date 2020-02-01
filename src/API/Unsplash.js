import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 8254f20c15efde753c1b7e0264e7a7b5cd2bb74ba0655b79abfd3095d73d296e'
    }

});