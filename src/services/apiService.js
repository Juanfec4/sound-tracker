import axios from "axios";

var client_id = `${import.meta.env.VITE_CLIENT_ID}`;
var redirect_uri = 'https://cuddly-memory-pwwr64px6wx3rpp7-5173.app.github.dev/';

var scope = 'user-top-read user-read-recently-played user-read-private';

export var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);


const getTopItems = async (item, auth) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${auth}`
          }
    }
    const BASE_URL = 'https://api.spotify.com/v1/me/top/'
    let data = await axios.get(`${BASE_URL}${item}`,config);
    return data;
}

const getUserDetails = async (auth) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${auth}`
          }
    }
    const BASE_URL = 'https://api.spotify.com/v1/me'
    let data = await axios.get(`${BASE_URL}`,config);
    return data;
}
export default {getTopItems, getUserDetails}