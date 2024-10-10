/*button click*/
const alphaBtn = document.querySelector(".alpha-button button");

alphaBtn.addEventListener("click", function() {
    if (alphaBtn.innerHTML==="Want to Read") {
    alphaBtn.innerHTML = '<img src="checkmark.png" alt="checkmark"> Want to Read';
    alphaBtn.style.backgroundColor = "var(--light-gray)";
    alphaBtn.style.color = "var(--black)";
    alphaBtn.title = "Remove from your to-read shelf.";
    }else {
        alphaBtn.innerHTML = "Want to Read";
        alphaBtn.removeAttribute("style");
        alphaBtn.title = "Add to your to-read shelf.";
    }
});
