import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify"



const Toast = () => {
    const {show, type, message } = useSelector(state => state.toastify);
    const dispatch = useDispatch();

   

    if(show && type === 'success') {
        return toast.success(message, {
            onClose: () => dispatch({
                type: 'RESET_TOAST',
            })
        });
    }

    if(show && type === 'error') {
        return toast.error(message, {
            onClose: () => dispatch({
                type: 'RESET_TOAST',
            })
        });
    }
    
    return null;
}

export default Toast;