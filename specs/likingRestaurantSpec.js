import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
// import ButtonLikeInitiator from '../src/scripts/utils/button-like-initiator';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeTruthy();
    });

    it('should not show the unlike button when the restaurant has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeFalsy();
    });

    it('should be able to like the restaurant', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantIdb.getRestaurant('rqdv5juczeskfw1e867');
        expect(restaurant).toEqual({ id: 'rqdv5juczeskfw1e867' });

        FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
    });

    it('should not add a restaurant again whe its already liked', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

        await FavoriteRestaurantIdb.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 'rqdv5juczeskfw1e867' }]);

        FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
    });

    it('should not add a restaurant when it has no id', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
});