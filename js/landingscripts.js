var menuBtnLanding = document.getElementById('hambMenuBtnLanding');
var landingNav = document.getElementById('landingNav');
var closeMenuBtnLanding = document.getElementById('closeMenuBtnLanding');



/*For triggering menu in a mobile view*/
menuBtnLanding.onclick = function () {
    landingNav.classList.add('show');
    console.log('Noo ei tule menu lahti')
}
closeMenuBtnLanding.onclick = function () {
    landingNav.classList.remove('show');
    console.log('no saaks siit kinni pannaaa')
};