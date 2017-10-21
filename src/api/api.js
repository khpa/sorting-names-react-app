var api = {
    getRovers(){
        var url=`https://api.myjson.com/bins/18gptr`;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = api;

// https://jsonplaceholder.typicode.com/users

//https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=EUWTCqcE7q0vX6XlrLWbjmTqrQR046YnuE8b37t5