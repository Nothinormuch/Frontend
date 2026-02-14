let navmenu = document.querySelector(".navmenu");
let hamCheckboxLabel = document.querySelector(".ham-checkbox-label");
let hamCheckbox = document.querySelector(".ham-checkbox");

navmenu.classList.add('navmenuUp');

hamCheckboxLabel.addEventListener('click',hamClick);

function hamClick(ev) {
    if(hamCheckbox.checked) {
        console.log("ham: MenuClose");
        navmenu.classList.remove('navmenuDown');
        navmenu.classList.add('navmenuUp');
    }
    else {
        console.log("ham: MenuOpen");
        navmenu.classList.remove('navmenuUp');
        navmenu.classList.add('navmenuDown');
    }
}