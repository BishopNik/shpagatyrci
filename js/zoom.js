const tekaPhotoImgEl = document.querySelector('.teka__photo');
const paramImg = {
    countImg: tekaPhotoImgEl.dataset.count,
    pathImg: tekaPhotoImgEl.dataset.type,
    temaImg: tekaPhotoImgEl.dataset.tema,
};

// function changeTopTekaPhotosIsOpen() {
//     const positionTekaTop = tekaPhotoImgEl.offsetTop;
//     for (i = positionTekaTop; i > -1; i -= 20) {
//         tekaPhotoImgEl.style.top = i + 'px';
//         console.log("🚀 ~ file: zoom.js:12 ~ changeTopTekaPhotosIsOpen ~ tekaPhotoImgEl.offsetTop:", tekaPhotoImgEl.offsetTop)
//         sleep(20);
//     }
// }

// function sleep(ms) {
//   const start = Date.now();
//   let now = start;
//   while (now - start < ms) {
//     now = Date.now();
//   }
// }

// changeTopTekaPhotosIsOpen();

// tekaPhotoImgEl.addEventListener('click', onClick);

// function onClick(event) {
//   event.preventDefault();

//   const isImgTeg = event.target.nodeName === 'IMG';

//   if (!isImgTeg) {
//       return
//     }
// }

function createGallery({ countImg, pathImg, temaImg }) {
    let newRendering = '';
    for (let i = 1; i <= countImg; i++) {
        newRendering += `
        <li class="teka__photo_img">
            <a href="./images/${pathImg}/IMG_${i}.jpg">
                <img src="./images/${pathImg}/IMG_${i}.jpg" alt="${temaImg}" />
            </a>
        </li>`
    }
    return newRendering;    //.join('')
}

const galleryItemBox = createGallery(paramImg);

tekaPhotoImgEl.insertAdjacentHTML('afterbegin', galleryItemBox);

const $lightbox = new SimpleLightbox('.teka__photo a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});


// function onClick(event) {
//   event.preventDefault();

//   const isImgTeg = event.target.nodeName === 'IMG';

//   if (!isImgTeg) {
//       return
//   }

//     const sourceClickedItem = event.target.src;

//     basicLightboxEl = basicLightbox.create(`
//             <img
//                 src="${sourceClickedItem}"             
//             />        
//         `, {
//         onClose: (instance) => {
//             window.removeEventListener('keydown', onClickEsc); 
//         },
//         onShow: (instance) => {
//             window.addEventListener('keydown', onClickEsc);
//         }    
//         });
//     basicLightboxEl.show();    
// }

// function onClickEsc(evt) {    
//     const ESCAPE = 'Escape'
//     const keyClicked = evt.key;

//     if (keyClicked === ESCAPE) {
//         basicLightboxEl.close()        
//     }    
// }