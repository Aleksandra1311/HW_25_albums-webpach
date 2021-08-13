import { ALBUMS_URL } from '../config';
import { PHOTOS_URL } from '../config';

export let photosArr = [];
export let albumsArr = [];
let currentPage = 0;

export function getAlbums() { // отображаем список альбомов
    return fetch(ALBUMS_URL)
        .then(resp => resp.json())  // преобразую ответ fetch в формат json, т.е. в массив объектов
        .then((data) => albumsArr = data)
}

export function getFirstAlbumPhotos(albumId) { //прилетает массив альбомов
    return fetch(PHOTOS_URL + albumId)
        .then((resp) => resp.json())
        .then(data => currentPage = data)
}







// // function getAlbums() { // отображаем список альбомов
// //     return fetch(ALBUMS_URL)
// //         .then(resp => resp.json())  // преобразую ответ fetch в формат json, т.е. в массив объектов
// //         .then((data) => data)
// // }
// import { ALBUMS_URL } from '../config';
// // import { getPhotos } from '../model/collection';
// import {renderAlbums} from '../view/view';
// import {getPhotos} from '../model/model';


// export function getAlbums() { // отображаем список альбомов
//     return fetch(ALBUMS_URL)
//         .then(resp => resp.json())  // преобразую ответ fetch в формат json, т.е. в массив объектов
//         .then(data => {
//             renderAlbums(data); //в этой ф-ии нужно убрать renderAlbums, он должен вызываться из controller
//             return data;
//         })
// }

// export function getFirstAlbumPhotos(data) { //прилетает массив альбомов
//     if(data.length) {//проверяет не пустой ли массив
//         getPhotos(data[0].id); //берём 0 эл этого массива и его id
//     }
// }

// //  function getPhotos(albumId) { // albumId это идентификатр 1 альбома
// //     return fetch(getPhotosUrl(albumId))
// //         .then((resp) => resp.json())
// //         .then(renderPhotos); //в этой ф-ии нужно убрать renderAlbums, он должен вызываться из controller
// // }