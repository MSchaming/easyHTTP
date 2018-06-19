/**   

* EasyHTTP Library
* Library for making HTTP requests

* @version 3.0.0
* @author Mike Schaming
* @license MIT


**/


class EasyHTTP {
    //Make an HTTP GET request
   async get(url) {

    const response = await fetch(url);

    const resData = await response.json();

    return resData;


    //********OLD */
        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err));
            
        }
     
    
    
    //Make HTTP POST Request
    async post(url, data){

      const response = await fetch(url,  {
                method: 'POST',
                headers: {
                    'Content-type' : "application/json"
                },
                body:  JSON.stringify(data)
            });

            const resData = await response.json();
            return resData;
            // .then(res => res.json())
            // .then(data => resolve(data))
            // .catch(err => reject(err));  
     }
    



    //Make a PUT Requeast
     async put(url, data){
        const putData = await fetch(url,  {
                method: 'PUT',
                headers: {
                    'Content-type' : "application/json"
                },
                body:  JSON.stringify(data)
            });
            // .then(res => res.json())
            // .then(data => resolve(data))
            // .catch(err => reject(err));
            const resData = await putData.json();
            return resData;
    
     }
    
     //Make an HTTP Delete Request
     async delete(url){
       
        const deleteData = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type' : "application/json"
                }
            });
            const resData = await 'Resource Deleted';
            return resData;
  
     }
    
    } //end of class
    
    
    
    