export function createMarkup({ urlToImage, likes, views, comments, downloads }) {
    return `
    <div class="photo-card">
    <img src=${urlToImage} alt="" loading="lazy" />
    <div class="info">
      <p class="info-item">
      ${likes}
        <b>Likes</b>
      </p>
      <p class="info-item">
      ${views}
        <b>Views</b>
      </p>
      <p class="info-item">
      ${comments}
        <b>Comments</b>
      </p>
      <p class="info-item">
      ${downloads}
        <b>Downloads</b>
      </p>
    </div>
  </div>
        `;
  }
  
  export function updateNewsList(markup) {
    document.getElementById('articlesWrapper').innerHTML = markup;
  }
  