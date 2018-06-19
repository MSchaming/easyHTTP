const http = new EasyHTTP;


// ******get Users

http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));




//***** Create User Data */

const data = {
    name: 'Jon Hawkins',
    username:  'JHawk',
    email:  'jhawkrulz@gmail.com'
}

http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));




//****** PUT Data */


http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));

//updates user ID 2 with the data





//***** Delete Data */

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));
