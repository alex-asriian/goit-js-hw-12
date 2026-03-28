import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, 
  clearGallery, 
  showLoader, 
  hideLoader, 
  showLoadMoreButton, 
  hideLoadMoreButton } from './js/render-functions.js';



let query = ''; 
let page = 1;   
let totalHits = 0; 

const form = document.querySelector('.form')



form.addEventListener('submit', async (event) => {
  event.preventDefault();
  query = event.target.elements['search-text'].value.trim();
  
  if (!query) {
    iziToast.warning({ message: 'Please enter a search query!' });
    return;
  }

  page = 1;         
  clearGallery();  
  hideLoadMoreButton(); 
  showLoader();     

  try {
    const data = await getImagesByQuery(query, page);
    hideLoader();
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({ message: 'Sorry, no images found!' });
      return;
    }

      createGallery(data.hits); 
      const maxPages = Math.ceil(totalHits / 15);
      
    if (totalHits > 0 && page >= maxPages) {
      hideLoadMoreButton(); 
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    hideLoader();   
    iziToast.error({ message: 'Something went wrong!' });
  }
  
  event.target.reset();
});

const loadMoreBtn = document.querySelector('.load-more-btn');

loadMoreBtn.addEventListener('click', async () => {
  page += 1; 
  hideLoadMoreButton(); 
  showLoader();         

  try {
    const data = await getImagesByQuery(query, page);
    hideLoader();
    createGallery(data.hits); 
    
      const galleryItem = document.querySelector('.gallery-item');

      if (galleryItem) {
          const cardHeight = galleryItem.getBoundingClientRect().height;
        
          window.scrollBy({
              top: cardHeight * 2,
              behavior: 'smooth',
          });

      }
      

    const maxPages = Math.ceil(totalHits / 15);
    if (page >= maxPages) {
      hideLoadMoreButton();
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
    } else {
      showLoadMoreButton(); 
    }
  } catch (error) {
    hideLoader();
    iziToast.error({ message: 'Error loading more images!' });
  }
});