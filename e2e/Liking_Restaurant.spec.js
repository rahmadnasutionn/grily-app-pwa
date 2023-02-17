const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('#cardContent');
    I.see('Empty Favorite Restaurant', '#cardContent');
});

Scenario('liking one restaurant', async({ I }) => {
    I.see('Empty Favorite Restaurant', '#cardContent');

    I.amOnPage('/');

    I.seeElement('.restaurant__title a');

    const firstRestaurant = locate('.restaurant__title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card__container');
    const likedRestaurant = await I.grabTextFrom('.restaurant__title');

    assert.strictEqual(firstRestaurantTitle, likedRestaurant);
});