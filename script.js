function celebrate() {

    document.getElementById("wish").style.display = "none";

    document.getElementById("celebration").style.display = "block";

    for (let i = 0; i < 50; i++) {

        let confetti = document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "25px";

        document.body.appendChild(confetti);

        confetti.animate(
            [
                { transform: "translateY(0)" },
                { transform: "translateY(110vh) rotate(720deg)" }
            ],
            {
                duration: 3000 + Math.random() * 2000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}