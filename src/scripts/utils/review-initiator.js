import RestaurantSource from '../data/restaurant-source';

const ReviewInitiator = (url, name, review) => {
    const dataForm = {
        id: url.id,
        name,
        review,
    };

    RestaurantSource.postReview(dataForm);

    const reviewContainer = document.querySelector('.review-detail');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('id-ID', options);
    const newReview = `
    <div class="review-content">
    <div class="review-info">
      <span class='review-name'>${name}</span>
      <span class='review-name'>${currentDate}</span>
    </div>
    <p class="review-body">
      ${review}
    </p>
  </div>`;
    reviewContainer.innerHTML += newReview;
};

export default ReviewInitiator;