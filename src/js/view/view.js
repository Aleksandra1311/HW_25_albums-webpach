// // import { PHOTOS_URL } from '../config';
// import { getPhotos } from '../model/model';

// const ALBUM_ITEM_CLASS = 'album-item';
 
//  const albumsEl = document.querySelector('#albums');//выборка елемент для рендера


// //  const albumItemTemplate = document.querySelector('#albumItemTemplate').innerHTML;
// //  const photoItemTemplate = document.querySelector('#photoItemTemplate').innerHTML;

// albumsEl.addEventListener('click', onAlbumsClick);

// function onAlbumsClick(e) { //делигирование, навешиваем 1 обраб на всё
//     if (e.target.classList.contains(ALBUM_ITEM_CLASS)) { //провер, клик произошёл по эл альбома, есть там такой class?
//         getPhotos(e.target.dataset.id) // если class есть то и e.target.dataset.id тоже есть , берём его значение(будет id альбома) и подставляем в getPhotos
//     }
// }

// export function renderAlbums(data) { //взяли тот массив который прилетит c getAlbums()
//     albumsEl.innerHTML = data
//         .map(album => generateAlbumHtml(album)) //превратили в строку этот массив и превращаю его в html
//         .join('\n');
// }

// //  function  generateAlbumHtml(album){ //превращение в html
// //     return albumItemTemplate
// //         .replace('{{id}}', album.id)
// //         .replace('{{title}}', album.title);
// // }
//  function  generateAlbumHtml(album){ //превращение в html
//     return `<div class="album-item" data-id="${album.id}">${album.title}</div>`
//         .replace('{{id}}', album.id)
//         .replace('{{title}}', album.title);
// }

// // export function getPhotosUrl(albumId) { //принимает id альбома
// //     return PHOTOS_URL
// //         .replace('{{id}}', albumId); //делает замену по шаблонизации 
// // }

// // export function renderPhotos(data) { // в data прилетает массив обьектов с описанием всех фото 
// //     photosEl.innerHTML = data
// //         .map((photo) => generatorPhotoHTML(photo)) //map превращает этот массив в массив строк, generatorPhotoHTML будет массив строк с уже подставленным src
// //         .join('\n'); //делаем перенос строки
// // }

// //  function generatorPhotoHTML(photo) {
// //     return `<img class="photo-item" src="${photo.thumbnailUrl}" alt="${photo.title}"/>`
// //         .replace('{{url}}', photo.thumbnailUrl)
// //         .replace('{{title}}', photo.title);
// // }
// //  function generatorPhotoHTML(photo) {
// //     return photoItemTemplate
// //         .replace('{{url}}', photo.thumbnailUrl)
// //         .replace('{{title}}', photo.title);
// // }