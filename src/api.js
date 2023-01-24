import axios from 'axios';

const searchImages = async ({term}) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        params: {
            client_id: 'iZ1da58KP5FiQ7odcjTjqlo1v2xKwEKVfLCPkukBlDc',
            query: {term}
        }
    });

    return response.data.results;
};

export default searchImages;