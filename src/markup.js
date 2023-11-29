function createImageCard(image) {
  const card = document.createElement('div');
  card.classList.add('photo-card');
  card.style.borderRadius = '4px';
  card.style.boxShadow = '1px 4px 6px 0px rgba(0, 0, 0, 0.16), 0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);';

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;
  img.loading = 'lazy';

  const info = document.createElement('div');
  info.classList.add('info');

  const likes = createInfoItem('Likes', image.likes);
  const views = createInfoItem('Views', image.views);
  const comments = createInfoItem('Comments', image.comments);
  const downloads = createInfoItem('Downloads', image.downloads);

  info.append(likes, views, comments, downloads);
  info.style.display = 'flex';
  info.style.flexDirection = 'row';
  info.style.justifyContent = 'space-evenly';
  info.style.alignItems = 'center';
  info.style.background = 'transparent';
  info.style.fontFamily = 'Roboto'
  info.style.border = '2px solid #0d8069';
  info.style.borderRadius = '4px';
  card.append(img, info);

  return card;
}

function createInfoItem(label, value) {
  const infoItem = document.createElement('p');
  infoItem.classList.add('info-item');
  infoItem.innerHTML = `<b>${label}:</b> ${value}`;
  return infoItem;
}

function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export { createImageCard, clearGallery };
