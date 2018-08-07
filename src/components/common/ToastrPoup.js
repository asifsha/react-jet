
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

    static clear(){
        toastr.clear();
    }
}

export default ToastrPopup;