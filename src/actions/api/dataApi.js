class DataApi {
    static getData() {       
        return new Promise((resolve, reject) => {
            this.callData()
                .then(res => resolve(res.express))
                .catch(function (err) {
                    console.log(err);
                    reject(err);
                });
        });

    }

    static getHello() {      
        return new Promise((resolve, reject) => {
            this.callApi()
                .then(res => resolve(res.express))
                .catch(function (err) {
                    console.log(err);
                    reject(err);
                });
        });

    }

    static callApi = async () => {
        const response = await fetch('/api/Hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

   static callData = async () => {
        const response = await fetch('/api/Data');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log(body.express);
        return body;
    }
}

export default DataApi;