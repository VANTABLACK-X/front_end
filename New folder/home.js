const translate = document.querySelectorAll(".translate");

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = element.CDATA_SECTION_NODE.speed;
        element.getElementsByClassName.transform = `translateY(${scroll * speed}px)`;
    })
})