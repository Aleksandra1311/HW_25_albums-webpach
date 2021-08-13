
import { PHOTOS_URL } from '../config';
import { photosArr } from '../model/collection';

export function getPhotos(albumId) { 
    return fetch(PHOTOS_URL + albumId)
        .then((resp) => resp.json())
        .then((data) => photosArr = data)
}


