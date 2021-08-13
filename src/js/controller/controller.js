import { getAlbums, getFirstAlbumPhotos, photosArr, albumsArr } from '../model/collection';
import { renderAlbums } from '../view/albumsView';
import {renderPhotos } from '../view/photosView';

export function init() {
    getAlbums()
        .then(() => renderAlbums(albumsArr)) //тут должен вызываться рендер
        .then(() => getFirstAlbumPhotos(albumsArr))
        .then(() => renderPhotos(photosArr)) //тут должен вызываться рендер
}