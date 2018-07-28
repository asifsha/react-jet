class CommonApi {
    // static getData() {       
    //     return new Promise((resolve, reject) => {
    //         this.callData()
    //             .then(res => resolve(res.express))
    //             .catch(function (err) {
    //                 err => console.log(err);
    //                 reject(err);
    //             });
    //     });

    // }

    // static getHello() {      
    //     return new Promise((resolve, reject) => {
    //         this.callApi()
    //             .then(res => resolve(res.express))
    //             .catch(function (err) {
    //                 err => console.log(err);
    //                 reject(err);
    //             });
    //     });

    // }

    static callApi = async (url) => {
        const response = await fetch(url);
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };
}

export default CommonApi;