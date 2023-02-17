const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('Add a review', async({ I }) => {
    const reviewBody = 'Good Taste';

    I.seeElement('.restaurant__title a');
    I.click(locate('.restaurant__title a').first());

    I.seeElement('.review-form');
    I.fillField('inputValue', 'Rahmad');
    I.fillField('inputReview', reviewBody);
    I.click('#btnSave');

    I.waitForResponse('https://restaurant-api.dicoding.dev/review');
    const resultReview = locate('.review-body').last();
    const resultReviewLast = await I.grabTextFrom(resultReview);

    assert.strictEqual(reviewBody, resultReviewLast.trim());
});