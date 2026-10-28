
document.addEventListener("DOMContentLoaded", function () {

    // Fitur 1: Filter project
    let buttons = document.querySelectorAll(".filter-btn");
    let projects = document.querySelectorAll(".project-item");
    let message = document.getElementById("message");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            let filter = button.dataset.filter;
            let count = 0;

            buttons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            projects.forEach(function (project) {
                let category = project.dataset.category;

                if (filter === "all" || filter === category) {
                    project.hidden = false;
                    count++;
                } else {
                    project.hidden = true;
                }
            });

            if (message) {
                message.textContent = "Jumlah project: " + count;
            }
        });
    });

    // Fitur 2: Tombol More About Me
    let moreBtn = document.getElementById("moreBtn");
    let moreText = document.getElementById("moreText");

    if (moreBtn && moreText) {
        moreBtn.addEventListener("click", function () {
            if (moreText.hidden) {
                moreText.hidden = false;
                moreBtn.textContent = "Show Less −";
            } else {
                moreText.hidden = true;
                moreBtn.textContent = "More About Me +";
            }
        });
    }

});
