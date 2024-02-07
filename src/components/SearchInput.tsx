import { FaSearch } from "react-icons/fa";
import { useState } from "react";

type SearchInputProps = {
    onSearch(value: string) : void
}

export function SearchInput({ onSearch } : SearchInputProps) {
    const [ value, setValue ] = useState(() => {
        const valueFromLocalStorage = localStorage.getItem("@gitbub-search-user/search-value");

        if (valueFromLocalStorage) {
            return valueFromLocalStorage;
        }
        return "";
    });
   
    function handleClick() {
        localStorage.setItem("@gitbub-search-user/search-value", value);
        onSearch(value);     
    }
    return (
        <form onSubmit={e => e.preventDefault()} 
            className="flex justify-center gap-5 max-w-[400px] w-full mt-[90px]
            mobile:py-[0] px-5">
                <div className="flex items-center relative w-full">
                    <input 
                    type="text" 
                    className="py-2 
                    pr-10 pl-2.5 
                    w-full outline-none 
                    rounded-[4px] 
                    ring-[3px] focus:ring-[#A367B1]
                    text-[14px]"
                    value={value}
                    autoFocus
                    onChange={e => setValue(e.target.value)}
                    placeholder="Github username"/>
                    
                    <FaSearch
                    className="absolute right-2.5"
                    size={15}/>
                </div>
                <button 
                type="submit"
                className="p-2 bg-[#A367B1] rounded-[4px]
                text-white"
                onClick={handleClick}>Search</button>
        </form>
    );
}