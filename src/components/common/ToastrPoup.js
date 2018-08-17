
import toastr from 'toastr';
import 'toastr/build/toastr.css';

toastr.options = {"preventDuplicates": true} 

class ToastrPopup {
    static error(message){
        toastr.error(message);
    }

    static success(message){
        toastr.success(message);
    }

    static info(message){
        toastr.info(message);
    }

    static clear(){
        toastr.clear();
    }
}

export default ToastrPopup;