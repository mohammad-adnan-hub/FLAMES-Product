var acc = document.getElementsByClassName("ques");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        // 🔧 FIXED TYPO: "parentEkement" → "parentElement"
        this.parentElement.classList.toggle("active");

        var ans = this.nextElementSibling;

        if (ans.style.display === "block") {
            ans.style.display = "none";
        } else {
            ans.style.display = "block";
        }
    });
}
