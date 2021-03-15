
 const axios = require('axios');

 const api = axios.create({
    baseURL: "http://viacep.com.br/ws",
  });
  
  module.exports = api;



// baseURL: "http://viacep.com.br/ws/38300022/json"





