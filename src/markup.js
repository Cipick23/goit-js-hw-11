export const galleryContainer = document.querySelector('.gallery');

function createImageCard(image) {
  const link = document.createElement('a');
  link.href = image.largeImageURL;
  link.setAttribute('data-lightbox', 'gallery');
  link.classList.add('simplelightbox');

  const card = document.createElement('div');
  card.classList.add('photo-card');
  card.style.borderRadius = '4px';
  card.style.boxShadow = '1px 4px 6px 0px rgba(0, 0, 0, 0.16), 0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)';

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;
  img.loading = 'normal';

  link.appendChild(img);
  card.appendChild(link);

  const info = document.createElement('div');
  info.classList.add('info');

  const likes = createInfoItem('Likes', image.likes);
  const views = createInfoItem('Views', image.views);
  const comments = createInfoItem('Comments', image.comments);
  const downloads = createInfoItem('Downloads', image.downloads);

  info.appendChild(likes);
  info.appendChild(views);
  info.appendChild(comments);
  info.appendChild(downloads);

  card.appendChild(info);

  return card;
}

function createInfoItem(label, value) {
  const item = document.createElement('div');
  item.classList.add('info-item');
  const itemLabel = document.createElement('span');
  itemLabel.classList.add('label');
  itemLabel.textContent = `${label}: `;
  const itemValue = document.createElement('span');
  itemValue.textContent = value;
  item.appendChild(itemLabel);
  item.appendChild(itemValue);
  return item;
}

function clearGallery() {
  galleryContainer.innerHTML = '';
}

export { createImageCard, clearGallery };