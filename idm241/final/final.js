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

            // Show the overlay and then fade it in
            niOverlay.style.display = "block";
            setTimeout(() => {
                niOverlay.style.opacity = "1"; // Trigger fade-in
            }, 10); // Small delay to allow the display change to take effect
        } else {
            niBtn.innerHTML = "Not Interested";

            // Fade out the overlay and then hide it
            niOverlay.style.opacity = "0";
            setTimeout(() => {
                niOverlay.style.display = "none";
            }, 200); // Match this with the transition duration
        }
    });
});


/*book description*/
document.querySelectorAll(".book-cover").forEach((bookCover) => {
    const bookDescription = bookCover.querySelector(".book-description");

    bookCover.addEventListener("mouseenter", () => {
        bookDescription.style.opacity = "1";
        bookDescription.style.display = "flex"; // Ensure it is displayed when hovering on the cover
    });

    bookCover.addEventListener("mouseleave", () => {
        if (!bookDescription.matches(':hover')) {
            bookDescription.style.opacity = "0";
            setTimeout(() => {
                bookDescription.style.display = "none";
            }, 200);
        }
    });

    bookDescription.addEventListener("mouseenter", () => {
        bookDescription.style.opacity = "1";
        bookDescription.style.display = "flex"; // Keep the description visible when hovering on the description
    });

    bookDescription.addEventListener("mouseleave", () => {
        if (!bookCover.matches(':hover')) {
            bookDescription.style.opacity = "0";
            setTimeout(() => {
                bookDescription.style.display = "none";
            }, 200);
        }
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