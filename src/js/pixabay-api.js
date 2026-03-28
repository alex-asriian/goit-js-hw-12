import axios from 'axios';

export const getImagesByQuery = (query) => {
  const API_KEY = '55193663-01ca752f3a3efdba5a4e579f6'; 
  const url = 'https://pixabay.com/api/';

  return axios.get(url, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  })
      .then(response => {
    return response.data;
  });
};