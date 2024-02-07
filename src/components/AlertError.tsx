/* eslint-disable quotes */
import { FaX } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";

type AlertErrorProps = {
    message: string
    isVisible?: boolean
    onPressCloseButton() : void
}

export function AlertError({ message, isVisible = false, onPressCloseButton } : AlertErrorProps) {
    if (isVisible) {
        return (
            <div className="flex
            bg-red-600 items-center fixed bottom-[10px] max-w-[360px]
            w-full rounded-sm p-[18px]">
                <BsInfoCircleFill className="absolute top-1 left-1.5 p-[2px]" 
                color="#ffffff" size={18}/>
                <p className="text-[14px] ml-[15px] text-white 
                max-w-[290px] w-full break-words">
                    {message}
                </p>
                <FaX className="absolute right-2 top-[7px]" 
                size={12} color="#FFFFFF"
                cursor="pointer" onClick={onPressCloseButton}/>
            </div>
        );
    }
    
}