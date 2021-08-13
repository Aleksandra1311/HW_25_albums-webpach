import { getPhotos } from '../model/model';
// import { getPhotos } from '../model/collection';

const ALBUM_ITEM_CLASS = 'album-item';
 
const albumsEl = document.querySelector('#albums');//выборка елемент для рендера

albumsEl.addEventListener('click', onAlbumsClick);

function onAlbumsClick(e) { //делигирование, навешиваем 1 обраб на всё
    if (e.target.classList.contains(ALBUM_ITEM_CLASS)) { //провер, клик произошёл по эл альбома, есть там такой class?
        getPhotos(e.target.dataset.id) // если class есть то и e.target.dataset.id тоже есть , берём его значение(будет id альбома) и подставляем в getPhotos
    }
}

export function renderAlbums(data) { //взяли тот массив который прилетит c getAlbums()
    albumsEl.innerHTML = data
        .map(album => generateAlbumHtml(album)) //превратили в строку этот массив и превращаю его в html
        .join('\n');
}

 function  generateAlbumHtml(album){ //превращение в html
    return `<div class="album-item" data-id="${album.id}">${album.title}</div>`
        .replace('{{id}}', album.id)
        .replace('{{title}}', album.title);
}
