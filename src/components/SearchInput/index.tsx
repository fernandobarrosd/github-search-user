import "./style.scss";
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
            className="search-input-container">
                <div className="input-container">
                    <input type="text" 
                    value={value}
                    autoFocus
                    onChange={e => setValue(e.target.value)}
                    placeholder="Github username"/>
                    <FaSearch size={15}/>
                </div>
                <button type="submit" onClick={handleClick}>Search</button>
        </form>
    );
}