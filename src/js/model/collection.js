import { ALBUMS_URL } from '../config';
import { PHOTOS_URL } from '../config';

export let photosArr = [];
export let albumsArr = [];
let currentPage = 0;

export function getAlbums() { 
    return fetch(ALBUMS_URL)
        .then(resp => resp.json())  
        .then((data) => albumsArr = data)
}

export function getFirstAlbumPhotos(albumId) { 
    return fetch(PHOTOS_URL + albumId)
        .then((resp) => resp.json())
        .then(data => currentPage = data)
}
