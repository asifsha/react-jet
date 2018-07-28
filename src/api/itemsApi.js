import CommonApi from './commonApi';

class ItemsApi {
    static getItems() {       
        return new Promise((resolve, reject) => {
            CommonApi.callApi('/api/Items')
                .then(res => resolve(res.express))
                .catch(function (err) {
                    err => console.log(err);
                    reject(err);
                });
        });

    }
}

export default ItemsApi;