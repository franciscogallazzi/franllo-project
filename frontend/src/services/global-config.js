import axios from 'axios';

export const setToken = function(token){
    axios.defaults.headers.common = {
        "Authorization": token
      };
}