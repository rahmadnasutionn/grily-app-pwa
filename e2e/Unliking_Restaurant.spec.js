const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked menu restaurant', ({ I }) => {
    I.dontSeeElement('.card__container');
});

Scenario('unliking one restaurant', async({ I }) => {
    I.dontSeeElement('.card__container');

    I.amOnPage('/');
    I.scrollTo('.card__content');
    I.wait(1);

    I.seeElement('.restaurant__title a');
    const firstRestaurant = locate('.restaurant__title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card__container');
    const likedRestaurant = await I.grabTextFrom(locate('.restaurant__title').first());

    assert.strictEqual(firstRestaurantTitle, likedRestaurant);

    I.seeElement('.restaurant__title');

    await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.dontSeeElement('.card__container');
});