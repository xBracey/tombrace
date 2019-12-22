let skills = document.querySelectorAll(".skill");

for (let skill of skills) {
    skill.addEventListener("click", function() {
        let headerImage = this.querySelector(".skill-header img");

        if (this.classList.contains("close")) {
            this.classList.add("open");
            this.classList.remove("close");

            headerImage.setAttribute("src", headerImage.getAttribute("minus-src"));
        } else {
            this.classList.add("close");
            this.classList.remove("open");

            headerImage.setAttribute("src", headerImage.getAttribute("plus-src"));
        }
    });
}
