const iconmenu = document.querySelector('.iconmenu');
const navigation = document.querySelector('.navigation');
const iconcross = document.querySelector('.iconcross');
if (iconmenu) {
    iconmenu.addEventListener('click', (e) => {
        e.preventDefault();
        navigation.classList.add("open");
    });
}
if (iconcross) {
    iconcross.addEventListener('click', (e) => {
        e.preventDefault();
        navigation.classList.remove("open");
    });
}