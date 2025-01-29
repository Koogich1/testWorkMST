document.addEventListener('DOMContentLoaded', function() {
	const header = document.querySelector('.header');
	const offerBlock = document.querySelector('.offer-block');
	const burger = document.querySelector('.header__menu-burger');
	const dropDownMenu = document.querySelector('.dropDownMenu');

	// Обработчик события прокрутки страницы
	window.addEventListener('scroll', function() {
			if (window.scrollY > 100) {
					header.classList.add('scrolled');
					offerBlock.classList.add('missingBlock');
			} else {
					header.classList.remove('scrolled');
					offerBlock.classList.remove('missingBlock');
			}
	});

	burger.addEventListener('click', (event) => {
			event.stopPropagation();
			toggleDropDownMenu();
	});

	function toggleDropDownMenu() {
			if (dropDownMenu.classList.contains("open")) {
					dropDownMenu.classList.remove('open');
					burger.classList.remove('burgerOpen');
			} else {
					dropDownMenu.classList.add('open');
					burger.classList.add('burgerOpen');
			}
	}

	document.addEventListener('click', (event) => {
			const isClickInsideMenu = dropDownMenu.contains(event.target);
			const isClickOnBurger = burger.contains(event.target);

			if (!isClickInsideMenu && !isClickOnBurger) {
					dropDownMenu.classList.remove('open');
					burger.classList.remove('burgerOpen');
			}
	});

	dropDownMenu.addEventListener('click', (event) => {
			event.stopPropagation();
	});
});