document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.querySelector('.see-more-btn');
    const moreContent = document.querySelector('.more-content');

    seeMoreBtn.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'inline';
            seeMoreBtn.textContent = 'See Less';
        } else {
            moreContent.style.display = 'none';
            seeMoreBtn.textContent = 'See More';
        }
    });
});
