function navToggle() {
    let navBtn = document.getElementById('navBtn');
    let mainNav = document.getElementById('mainNav');
    let heightNav = mainNav.firstElementChild.offsetHeight;
    navBtn.onclick = function () {
        if (mainNav.classList.contains('nav-hidden')) {
            mainNav.classList.remove('nav-hidden');
            mainNav.style.height = heightNav + 'px';
        } else {
            mainNav.classList.add('nav-hidden');
            mainNav.style.height = 0;
        }
    }
    let point = document.getElementById("pointer");
    point.onclick = function () {
         alert("АРА НЕ ТРОГАЙ СИДИ НА АНГ ЯЗЫКЕ");
    }
}

const addLinksScroll = () => {
    const links = document.getElementsByClassName('nav__element');
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link?.href.split('#')[1];
            const scrollElement = document.getElementById(href);
            scrollElement.scrollIntoView({behavior: "smooth"})
        })
    }
}

navToggle();
addLinksScroll();
