let api = {
    getUsers() {
        var url = "https://jsonplaceholder.typicode.com/users";
        return fetch(url).then((res) => res.json());
    },

    sendUsers(namey) {
        return fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: namey,
                secondParam: 'yourOtherValue',
            })
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
    },
    deleteUsers(i) {
        console.log('deleted from api:',i)
        return fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: i,
                secondParam: 'yourOtherValue',
            })
        })
            .then((delresponse) => delresponse.json())
            .catch((error) => {
                console.error(error);
            });
    }

};


module.exports = api;

//api:
// https://jsonplaceholder.typicode.com/users
//https://api.myjson.com/bins/18gptr

//docs
//https://www.w3schools.com/tags/ref_httpmethods.asp
//https://www.exceptionnotfound.net/using-http-methods-correctly-in-asp-net-web-api/