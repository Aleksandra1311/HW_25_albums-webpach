const photosEl = document.querySelector('#photos');//выборка елемент для рендера

export function renderPhotos(data) { // в data прилетает массив обьектов с описанием всех фото
    photosEl.innerHTML = data
        .map((photo) => generatorPhotoHTML(photo)) //map превращает этот массив в массив строк, generatorPhotoHTML будет массив строк с уже подставленным src
        .join('\n'); //делаем перенос строки
}

 function generatorPhotoHTML(photo) {
    return `<img class="photo-item" src="${photo.thumbnailUrl}" alt="${photo.title}"/>`
        .replace('{{url}}', photo.thumbnailUrl)
        .replace('{{title}}', photo.title);
}