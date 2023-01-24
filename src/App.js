import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
function App(){

    const [images, setImages] = useState([]);

    const handleSubmit = async (term)=>{
        // console.log('The term is', term);
        const value = await searchImages(term);
        setImages(value);
    }
    return (
        <>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </>
    );
}
export default App;