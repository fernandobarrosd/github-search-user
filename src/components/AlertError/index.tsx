import { FaX } from "react-icons/fa6";
import "./style.scss";
import { BsInfoCircleFill } from "react-icons/bs";

type AlertErrorProps = {
    message: string
    isVisible?: boolean
    onPressCloseButton() : void
}

export function AlertError({ message, isVisible = false, onPressCloseButton } : AlertErrorProps) {

    return (
        <div className={`alert-error-container ${isVisible ? "visible" : ""}`}>
            <BsInfoCircleFill className="error-icon" color="#ffffff" size={18}/>
            <p>{message}</p>
            <FaX className="close-icon" size={12} color="#FFFFFF"
            cursor="pointer" onClick={onPressCloseButton}/>
        </div>
    );
}