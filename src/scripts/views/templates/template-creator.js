import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantItemTemplate = (restaurant) => `
<article class="card__container">
    <img tabIndex="0" class="lazyload" data-src="${API_ENDPOINT.IMAGE_MEDIUM(restaurant.pictureId)}" alt="${restaurant.name}">
    <div tabIndex="0" class="card__info">
      <h3 tabIndex="0" >${restaurant.city}</h3>
      <span tabIndex="0">⭐️ ${restaurant.rating}</span>
    </div>
      <div tabIndex="0" class="card__title">
        <h2 class="restaurant__title" tabIndex="0">
          <a href="#/detail/${restaurant.id}">
            ${restaurant.name}
          </a>
        </h2>
      <p tabIndex="0">${restaurant.description.substring(0, 100)} ...</p>
      <div class='detail-container'>
          <a href="#/detail/${restaurant.id}" class='btn-detail'>Read More</a>
      </div>
      </div>
</article>`;

const createRestaurantDetailTemplate = (restaurant) => `
<article tabIndex="0" class="restaurant__container">
  <img tabIndex="0" data-src="${API_ENDPOINT.IMAGE_MEDIUM(restaurant.pictureId)}" alt="${restaurant.name}" class="lazyload">
  </div>
   <div class='restaurant__content'>
    <div class="restaurant__info">
    <h2 tabIndex="0">${restaurant.name}</h2>
      <h4 tabIndex="0" >${restaurant.address}, ${restaurant.city}</h4>
      <span tabIndex="0">⭐️ ${restaurant.rating}</span>
    </div>
      <div tabIndex="0" class="restaurant__footer">
      <p tabIndex="0">${restaurant.description}</p>
    <div class='category-container'>
      <h5>Categories</h5>
      <div class='category-info'>
      ${restaurant.categories.map((category) => `
          <span>${category.name}</span> `)}
      </div>
    </div> 
    <div class='menu-container'>
    <h5>Our Menu</h5>
      <div class='menu-detail'>
        <div class='menu-title'>
          <h6>Food (${restaurant.menus.foods.length})</h6>
          <div class='underline'></div>
        </div>
        <div class='menu-food'>
          ${restaurant.menus.foods.map((food, i) => `
          <span>${i + 1}. ${food.name}</span>`).join(' ')}
        </div>
        <div class='menu-title'>
          <h6>Drink (${restaurant.menus.drinks.length})</h6>
          <div class='underline'></div>
        </div>
        <div class='menu-drink'>
          ${restaurant.menus.drinks.map((drink, i) => `
          <span>${i + 1}. ${drink.name}</span>`).join('')}
        </div>
      </div>
    </div> 
    <div class='review-container'>
      <h5>Review (${restaurant.customerReviews.length})</h5>
      <div class='review-detail'>
      
         ${restaurant.customerReviews.map((review) => `
        <div class="review-content">
          <div class="review-info">
            <div class='review-footer'>
            <span class='review-avatar'>${review.name.charAt(0).toUpperCase()}</span>
              <span class='review-name'>${review.name}</span>
            </div>
            <span class='review-date'>${review.date}</span>
          </div>
          <p class="review-body">
            ${review.review}
          </p>
        </div>
         `).join('')}
      </div>
    </div>
</article>`;

const createButtonLikeTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
   <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createButtonLikedTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export { 
  createRestaurantItemTemplate, 
  createRestaurantDetailTemplate,
  createButtonLikeTemplate,
  createButtonLikedTemplate 
};