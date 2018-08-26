import axios from 'axios';

class ServiceApi {

    static getTypes() {

        return new Promise((resolve, reject) => {

            axios.get('/types')
                .then(function (response) {
                    if (response.data != null)
                    {
                        var arr=response.data.map(
                            x => { 
                                var type = { id: x._id, name:x.name };
                                return type;
                         });                                  
                        resolve(arr);
                    }                        
                    else
                        resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                })
                .then(function () {
                    // always executed
                });
            //resolve(([]));
        }
        );


    }

    static getItems() {
        return new Promise((resolve, reject) => {
            axios.get('/items')
                .then(function (response) {                    
                    if (response.data != null)
                    {
                        var arr=response.data.map(
                            x => { 
                                var item = { id: x._id, name:x.name, price: x.price,
                                     type: x.type, date: x.date, inStock:x.inStock === undefined ? false : x.inStock };
                                return item;
                         });    
                         console.log('after maps');
                         console.log(arr);                    
                        resolve(arr);
                    }                        
                    else
                        resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                })
                .then(function () {
                    // always executed
                });
            //resolve(([]));
        }
        );
    }

    static saveItem(item) {
        return new Promise((resolve, reject) => {
            console.log('in save api');
            console.log(item);
            if (item.id !== -1) {
                axios.put('/items/' + item.id, item)
                    .then(function (response) {
                        console.log('response.data');
                        console.log(response.data);
                        let l= { id:response.data._id, name: response.data.name, date : response.data.date,
                            price: response.data.price, type:response.data.type , inStock: response.data.inStock }
                        resolve((l));
                    })
                    .catch(function (error) {
                        reject(error);
                    })
                    .then(function () {
                        // always executed
                    });
                //resolve(([]));
            }
            else {
                axios.post('/items', item)
                    .then(function (response) {
                        console.log(response.data);
                        let l= { id:response.data._id, name: response.data.name, date : response.data.date,
                            price: response.data.price, type:response.data.type , inStock: response.data.inStock }
                        resolve((l));
                    })
                    .catch(function (error) {
                        reject(error);
                    })
                    .then(function () {
                        // always executed
                    });
            }
        }
        );
    }
    static deleteItem(item) {
        return new Promise((resolve, reject) => {
            axios.delete('/items/' + item.id)
                .then(function (response) {
                    console.log('delete api data');
                    console.log(response.data);
                    resolve((item));
                })
                .catch(function (error) {
                    reject(error);
                })
                .then(function () {

                });

        }
        );
    }
}

export default ServiceApi;
