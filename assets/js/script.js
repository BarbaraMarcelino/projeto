const iconmenu = document.querySelector('.iconmenu');
const navigation = document.querySelector('.navigation');
const cross = document.querySelector('.iconcross');
if (iconmenu) {
    iconmenu.addEventListener('click', (e) => {
        e.preventDefault();
        navigation.classList.add("open");
    });
}
if (cross) {
    cross.addEventListener('click', (e) => {
        e.preventDefault();
        navigation.classList.remove("open");
    });
}