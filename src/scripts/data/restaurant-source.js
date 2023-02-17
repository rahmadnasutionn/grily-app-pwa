import API_ENDPOINT from '../globals/api-endpoint';
import { hideLoading, showLoading } from '../utils/spinner-initiator';

class RestaurantSource {
    static async getRestaurants() {
        showLoading();
        try {
            const response = await fetch(API_ENDPOINT.LIST);
            const responseJson = await response.json();
            hideLoading();
            return responseJson.restaurants;
        } catch (err) {
            showLoading();
            console.log(err);
            return {};
        }
    }

    static async getDetailRestaurant(id) {
        showLoading();
        try {
            const response = await fetch(API_ENDPOINT.DETAIL(id));
            const responseJson = await response.json();
            hideLoading();
            return responseJson.restaurant;
        } catch (err) {
            showLoading();
            console.log(err);
            return {};
        }
    }

    static async postReview(review) {
        const response = await fetch(API_ENDPOINT.REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        });
        const responseJson = await response.json();
        return responseJson;
    }
}

export default RestaurantSource;