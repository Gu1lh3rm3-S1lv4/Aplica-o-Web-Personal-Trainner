let ismobile = window < 1024;

AOS.init({
    disable: false,

    offset: ismobile ? 50 : 250,

    duration: ismobile ? 600 : 1000,
});