/*wtr button*/
const wtrBtn = document.querySelector(".wtr-button button");

wtrBtn.addEventListener("click", function() {
    if (wtrBtn.innerHTML === "Want to Read") {
        wtrBtn.innerHTML = '<img src="../alpha/checkmark.png" alt="checkmark"> Want to Read';
        wtrBtn.style.backgroundColor = "var(--light-gray)";
        wtrBtn.style.color = "var(--black)";
    } else {
        wtrBtn.innerHTML = "Want to Read";
        wtrBtn.removeAttribute("style");
    }
});

/*star rating*/
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            resetStars();
            highlightStars(star.getAttribute('data-rating'));
        });

        star.addEventListener('mouseout', () => {
            resetStars();
            if (selectedRating > 0) highlightStars(selectedRating);
        });

        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-rating');
            if (selectedRating == rating) {
                selectedRating = 0;
                resetStars();
            } else {
                selectedRating = rating;
                resetStars();
                highlightStars(selectedRating, true);
            }
        });
    });

    function highlightStars(rating, isSelected = false) {
        stars.forEach(star => {
            if (star.getAttribute('data-rating') <= rating) {
                star.classList.add(isSelected ? 'selected' : 'hovered');
            }
        });
    }

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('hovered');
            star.classList.remove('selected');
        });
    }
});
