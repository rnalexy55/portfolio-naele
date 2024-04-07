(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();





let mp1 = document.getElementById("mp1");
let mpc1 = document.getElementById("mpc1");
let mp2 = document.getElementById("mp2");
let mpc2 = document.getElementById("mpc2");

mp1.addEventListener("mouseover", () => {mpc1.style.display = "block";});
mp1.addEventListener("mouseout", () => {mpc1.style.display = "none";});
mp2.addEventListener("mouseover", () => {mpc2.style.display = "block";});
mp2.addEventListener("mouseout", () => {mpc2.style.display = "none";});


