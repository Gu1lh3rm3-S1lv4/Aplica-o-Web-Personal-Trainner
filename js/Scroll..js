const myObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    })
});

const elementos = document.querySelectorAll(".secao-4");

elementos.forEach((Element) => myObserver.observe(Element))