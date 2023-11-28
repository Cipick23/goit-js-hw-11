export function createImageCard(image) {
  const card = document.createElement('div');
  card.classList.add('card');

  const imgElement = document.createElement('img');
  imgElement.src = image.webformatURL;
  imgElement.alt = image.tags;

  // Adaugă elementul imagine la card
  card.appendChild(imgElement);

  return card;
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}
