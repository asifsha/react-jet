import React from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

toastr.options = {"preventDuplicates": true} 

class ToastrPopup {

    constructor() {
        
    }
    //static get toastr() { return toastr; }

    static error(message){
        toastr.error(message);
    }

    static success(message){
        toastr.success(message);
    }

    static clear(){
        toastr.clear();
    }
}

export default ToastrPopup;