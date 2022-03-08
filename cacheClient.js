const axios = require('axios');

class CacheClient {

    constructor(url) {
        this.url = url;
    }

    async set(key, value) {
        var response = await axios({
            method: "post",
            url: this.url + "/set",
            data: JSON.stringify({ key, value }),
            headers: {
                method: "POST",
                "Content-Type": "application/json",
            }
        })
    }

    async get(key) {
        var response = await axios({
            method: "post",
            url: this.url + "/get",
            data: JSON.stringify({ key }),
            headers: {
                method: "POST",
                "Content-Type": "application/json",
            }
        })
        return response.data;
    }

}

module.exports = CacheClient;