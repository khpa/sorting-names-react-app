var api = {
    getUsers() {
        var url = "https://jsonplaceholder.typicode.com/users";
        return fetch(url).then((res) => res.json());
    }
};

module.exports = api;

// https://jsonplaceholder.typicode.com/users


//https://api.myjson.com/bins/18gptr