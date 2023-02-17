import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import ButtonLikePresenter from '../../utils/button-like-presenter';
import ReviewInitiator from '../../utils/review-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
        <div class='breadcrumb'>
            <a href="#/" class='breadcrumb__link'>Home / <span>Detail Restaurant</span></a>
        </div>
        <div tabindex="0" id="restaurant"class="restaurant"></div>
        <div class='review-form'>
         <p class='notif' id="notification"></p>
        <div class="review-form-input">
        <input id='inputValue' name="inputValue" type="text" class='input-form' placeholder='your name'>
        </div>
        <div class="review-form-input">
        <textarea id='inputReview' name="inputReview" class='input-message-form' placeholder='your review'></textarea>
        </div>
        <div class='review-form-input'>
        <button type='submit' id='btnSave' type='button' class='btn-save'>Save</button>
        </div>
        </div>
        <div id='likeButtonContainer' class='like-button_container'></div>
      `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurants = await RestaurantSource.getDetailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

        ButtonLikePresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurant: FavoriteRestaurantIdb,
            restaurants,
        });

        const btnSave = document.querySelector('#btnSave');
        const inputValue = document.querySelector('#inputValue');
        const inputReview = document.querySelector('#inputReview');
        const notification = document.querySelector('#notification');

        btnSave.addEventListener('click', (e) => {
            e.preventDefault();

            if (inputValue === '' || inputReview === '') {
                // eslint-disable-next-line no-alert
                alert('Inputan tidak boleh kosong');
            } else {
                ReviewInitiator(url, inputValue.value, inputReview.value);
                inputValue.value = '';
                inputReview.value = '';
                notification.innerHTML = 'Terima kasih reviewnya';
            }
        });
    },
};

export default Detail;