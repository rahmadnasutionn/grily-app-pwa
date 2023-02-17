const loadingInitiator = document.querySelector('.loading');

function showLoading() {
    loadingInitiator.classList.remove('hide-loading');
}

function hideLoading() {
    loadingInitiator.classList.add('hide-loading');
}

export { showLoading, hideLoading };