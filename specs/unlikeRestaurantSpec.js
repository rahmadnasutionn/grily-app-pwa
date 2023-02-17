import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
// import ButtonLikeInitiator from '../src/scripts/utils/button-like-initiator';
import * as TestFactories from './helpers/testFactories';

describe('Unlike A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(async() => {
        addLikeButtonContainer();
        await FavoriteRestaurantIdb.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    });

    afterEach(async() => {
        await FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
    });

    it('should display unlike widget when the restaurant has been liked', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeTruthy();
    });

    it('should not display like widget when the restaurant has been liked', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeFalsy();
    });

    it('should be able to remove liked restaurant from the list', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });

    it('should not throw error if the unliked restaurant is not in the list', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

        await FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
});