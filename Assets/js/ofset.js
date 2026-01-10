AOS.init({
    mobile: function(){
        return window.matchMedia('(max-width: 1024px)').matches;
    }
})