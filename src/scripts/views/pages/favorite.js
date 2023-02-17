import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
    <div class='breadcrumb'>
        <a href="#/" class='breadcrumb__link'>Home / <span>Favorites</span> </a>
    </div>
        <div id="cardContent"class="card__content"></div>
      `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
        const restaurantContainer = document.querySelector('#cardContent');

        if (restaurants.length === 0) {
            restaurantContainer.innerHTML = 'Empty Favorite Restaurant';
        }

        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Favorite;