import { getPhotos } from '../model/model';

const ALBUM_ITEM_CLASS = 'album-item';
 
const albumsEl = document.querySelector('#albums');

albumsEl.addEventListener('click', onAlbumsClick);

function onAlbumsClick(e) { 
    if (e.target.classList.contains(ALBUM_ITEM_CLASS)) { 
        getPhotos(e.target.dataset.id) 
    }
}

export function renderAlbums(data) { 
    albumsEl.innerHTML = data
        .map(album => generateAlbumHtml(album)) 
        .join('\n');
}

 function  generateAlbumHtml(album){
    return `<div class="album-item" data-id="${album.id}">${album.title}</div>`
        .replace('{{id}}', album.id)
        .replace('{{title}}', album.title);
}
