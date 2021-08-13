
import { PHOTOS_URL } from '../config';
import { photosArr } from '../model/collection';

export function getPhotos(albumId) { // albumId это идентификатр 1 альбома
    return fetch(PHOTOS_URL + albumId)
        .then((resp) => resp.json())
        .then((data) => photosArr = data)
        // .then(renderPhotos); //в этой ф-ии нужно убрать renderAlbums, он должен вызываться из controller
}


