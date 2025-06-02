document.addEventListener('DOMContentLoaded', () => {
    const splide = new Splide('.splide', {
        type: 'loop'
    }).mount();
    splide.on('autoplay:playing', (rate) => {
        console.log( rate );
    });
});
