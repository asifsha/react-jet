import axios from 'axios';

class ServiceApi {

    static getTypes() {

        return new Promise((resolve, reject) => {

            axios.get('https://107d3e83-6963-4a9f-9963-8e5b93599b20.mock.pstmn.io/getTypes')
                .then(function (response) {
                    console.log(response.data);
                    resolve((response.data));
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

    static saveItem() {
        return new Promise((resolve, reject) => {
            axios.post('https://107d3e83-6963-4a9f-9963-8e5b93599b20.mock.pstmn.io/saveItem')
                .then(function (response) {
                    console.log(response.data);
                    resolve((response.data));
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
}

export default ServiceApi;
