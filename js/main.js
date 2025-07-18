document.addEventListener("DOMContentLoaded", function () {
    const splide = new Splide(".splide", {
        type: "loop",
        perMove: 1,
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        resetProgress: false,
        focus: "center",
        fixedWidth: "320px",
        gap: "60px",
        pagination: false,
        breakpoints: {
            1200: { gap: "48px" },
            1024: { gap: "40px" },
            768: { gap: "32px" },
            480: { perPage: 1, gap: "24px", fixedWidth: "100%" },
        },
    });
    let restartTimeout;

    splide.on("moved", () => {
        clearTimeout(restartTimeout);
        restartTimeout = setTimeout(() => {
            splide.Components.Autoplay.play();
        }, 5000);
    });

    splide.mount();
});
