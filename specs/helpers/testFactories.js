import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import ButtonLikePresenter from '../../src/scripts/utils/button-like-presenter';

const createLikeButtonPresenterWithRestaurant = async(restaurants) => {
    await ButtonLikePresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurants,
    });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };