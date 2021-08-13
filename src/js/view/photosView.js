const photosEl = document.querySelector('#photos');

export function renderPhotos(data) {
    photosEl.innerHTML = data
        .map((photo) => generatorPhotoHTML(photo))
        .join('\n');
}

 function generatorPhotoHTML(photo) {
    return `<img class="photo-item" src="${photo.thumbnailUrl}" alt="${photo.title}"/>`
        .replace('{{url}}', photo.thumbnailUrl)
        .replace('{{title}}', photo.title);
}
