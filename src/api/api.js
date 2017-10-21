var api = {
    getUsers() {
        var url = `https://api.myjson.com/bins/18gptr`;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = api;

// https://jsonplaceholder.typicode.com/users
