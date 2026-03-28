import axios from 'axios';

export async function getImagesByQuery(query, page = 1) {
  const API_KEY = '55193663-01ca752f3a3efdba5a4e579f6'; 
  const url = 'https://pixabay.com/api/';

  const response = await axios.get(url, {
    params: {
      key: API_KEY,
      q: query,
      page: page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    }
  });
  return response.data;
}


