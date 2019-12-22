let skills = document.querySelectorAll(".skill");

for (let skill of skills) {
    skill.addEventListener("click", function() {
        if (this.classList.contains("close")) {
            this.classList.add("open");
            this.classList.remove("close");
        } else {
            this.classList.add("close");
            this.classList.remove("open");
        }
    });
}
