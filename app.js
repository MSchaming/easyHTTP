const http = new easyHTTP;

//Get Posts

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

//Get Single Posts

http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});


//create data to post

const data = {
    title: 'Custom Data',
    body: 'this is a custom post',
    name: 'mike'
};

//POST request

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});


//PUT request

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
        if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});


//DELETE request

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }
});