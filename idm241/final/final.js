/*wtr button*/
document.querySelectorAll(".wtr-button button").forEach((wtrBtn) => {
    wtrBtn.addEventListener("click", function () {
        if (wtrBtn.innerHTML === "Want to Read") {
            wtrBtn.innerHTML = '<img src="../alpha/checkmark.png" alt="checkmark"> Want to Read';
            wtrBtn.style.backgroundColor = "var(--light-gray)";
            wtrBtn.style.color = "var(--black)";
        } else {
            wtrBtn.innerHTML = "Want to Read";
            wtrBtn.removeAttribute("style");
        }
    });
});

/*star rating*/
document.querySelectorAll(".star-rating").forEach((ratingContainer) => {
    const stars = ratingContainer.querySelectorAll('.star'); // Scoped to this container
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
                // Deselect
                selectedRating = 0;
                resetStars(); // Ensure all stars are reset
            } else {
                // Select
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
            star.classList.remove('hovered', 'selected'); // Clear both hovered and selected
        });
    }
});

/*ni button*/
document.querySelectorAll(".ni-button").forEach((niBtn) => {
    const niOverlay = niBtn.previousElementSibling;

    niBtn.addEventListener("click", function () {
        if (niBtn.innerHTML === "Not Interested") {
            niBtn.innerHTML = "Interested";
            niOverlay.style.display = "block";
        } else {
            niBtn.innerHTML = "Not Interested";
            niBtn.removeAttribute("style");
            niOverlay.removeAttribute("style");
        }
    });
});

/*book description*/
document.querySelectorAll(".book-cover").forEach((bookCover) => {
    const bookDescription = bookCover.querySelector(".book-description");

    bookCover.addEventListener("mouseenter", () => {
        bookDescription.style.opacity = "1";
        bookDescription.style.display = "flex";
    });

    bookCover.addEventListener("mouseleave", () => {
        bookDescription.style.opacity = "0";
        setTimeout(() => {
            bookDescription.style.display = "none";
        }, 200);
    });

    bookDescription.addEventListener("mouseleave", () => {
        bookDescription.style.opacity = "0";
        setTimeout(() => {
            bookDescription.style.display = "none";
        }, 200);
    });
});

/*more/hide button*/
document.querySelectorAll(".book-description button").forEach((truncateBtn) => {
    const truncateText = truncateBtn.closest(".book-description").querySelector(".truncated-text");

    truncateBtn.addEventListener("click", function () {
        if (truncateBtn.innerHTML === "...more") {
            setTimeout(() => {
                truncateBtn.innerHTML = "hide";
            }, 100);
            truncateText.classList.add("untruncated-text");
            truncateText.classList.remove("truncated-text");
        } else {
            setTimeout(() => {
                truncateBtn.innerHTML = "...more";
            }, 150);
            truncateText.classList.add("truncated-text");
            truncateText.classList.remove("untruncated-text");
        }
    });
});