import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery,showLoader,hideLoader } from './js/render-functions.js';


const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements['search-text'].value.trim();
    if (!searchValue) {
       iziToast.warning({
        message: 'Please fill the search field',
        position: 'topRight',
    });
        return;
    }
    clearGallery(); 
    showLoader();
    
    getImagesByQuery(searchValue)
        .then(data => {
            hideLoader();
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                })
                return;
            } else {
                createGallery(data.hits);
            }

    
e.target.reset();
        })
        .catch(error => {
            console.log(error);
            
            hideLoader();
            iziToast.error({
                message: 'Something went wrong. Please try again later.',
                position: 'topRight',
            });
            
        });

})