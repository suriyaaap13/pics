import { useState } from "react";


function SearchBar({onSubmit}){

    const [term, setTerm] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        onSubmit(term);
    }
    const handleChange = (event)=>{
        setTerm(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder="Search Images"/>
        </form>
    );
}
export default SearchBar;