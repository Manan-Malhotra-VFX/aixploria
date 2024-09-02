document.getElementById('see-more').addEventListener('click', function() {
    const moreText = document.getElementById('more-text');
    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        this.textContent = 'See Less';
    } else {
        moreText.style.display = 'none';
        this.textContent = 'See More';
    }
});
