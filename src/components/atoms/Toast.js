import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successToast = (text) => {
  toast.success(text, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1800,
  });
};
export const errorToast = (text) => {
  toast.error(text, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1800,
  });
};
