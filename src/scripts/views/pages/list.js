import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const List = {
    async render() {
        return `
        <h3 tabindex="0 " class="main-content__title">Explore Restaurant</h3>
        <div class="underline"></div>
        <div tabindex="0" id="cardContent"class="card__content"></div>
      `;
    },

    async afterRender() {
        const restaurants = await RestaurantSource.getRestaurants();
        const cardContent = document.querySelector('#cardContent');
        
        restaurants.forEach((restaurant) => {
            cardContent.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default List;