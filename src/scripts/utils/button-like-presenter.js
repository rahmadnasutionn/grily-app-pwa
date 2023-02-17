import { createButtonLikedTemplate, createButtonLikeTemplate } from '../views/templates/template-creator';

const ButtonLikePresenter = {
    async init({ likeButtonContainer, favoriteRestaurant, restaurants }) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurants;
        this._favoriteRestaurant = favoriteRestaurant;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await this._favoriteRestaurant.getRestaurant(id);
        return !!restaurant;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createButtonLikeTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async() => {
            await this._favoriteRestaurant.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createButtonLikedTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async() => {
            await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    }
};

export default ButtonLikePresenter;