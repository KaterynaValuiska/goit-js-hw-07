import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const list = document.querySelector(".gallery");
  const imgUp = galleryItems
  .map((element) => `<li class="gallery__item">
  <a class="gallery__link" href=${element.original}>
    <img
      class="gallery__image"
      src=${element.preview}
      data-source=${element.original}
      alt=${element.description}
    />
  </a>
</li>`)
      .join("");
  
list.insertAdjacentHTML("afterbegin", imgUp);

list.addEventListener('click', onShowModal);

function onShowModal(event) {  
  event.preventDefault();
  
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
    const source = event.target.dataset.source;
    const alt = event.target.alt;
    
    const instance = basicLightbox.create(`<img src=${source} alt="${alt}" width="800" height="600"/>`, {
  onShow: (instance) => {window.addEventListener('keydown', onClickEsc);},
    onClose: (instance) => {window.removeEventListener('keydown', onClickEsc);}
    });
    
    instance.show() 

    function onClickEsc(event) {
    if (event.code === 'Escape') {  
        instance.close()       
    }
    return;
}
}

