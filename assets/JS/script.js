const navbarLink = document.querySelectorAll('.nav__ul>li>a')

navbarLink.forEach(elem => {
    elem.addEventListener('click', function (e) {
        e.preventDefault();
    });
});

// =========>:-Dropdown
	const navTtoggle = document.querySelector('.hamburger')
	const navbar = document.querySelector('.navbar')

	navTtoggle.addEventListener('click',function () {
			navbar.classList.toggle('open');
		 	const closeIcon = document.querySelector('.close');
		 	const barsIcon = document.querySelector('.bars');

		 	if (navbar.classList.contains('open')) {
		 		barsIcon.style.display = "none";
		 		closeIcon.style.display = "block"
		 	}else{
		 		barsIcon.style.display = "block";
		 		closeIcon.style.display = "none"
		 	}
	})

// =============>:- Accordion -:<===================
const accordionItems = document.querySelectorAll('.accordion__item')

accordionItems.forEach(item => {
	const title = item.querySelector('.accordion__title');
	const content = item.querySelector('.accordion__content');
	const icon = item.querySelector('.accordion__icon i')

	title.addEventListener('click',accordionToggle);
	icon.addEventListener('click',accordionToggle);
	function accordionToggle() {
			for (let i = 0; i < accordionItems.length; i++) {
				if (accordionItems[i] != item) {
					accordionItems[i].classList.remove('active');
				}else{
					item.classList.toggle('active');
				}
		}
	}
})

// =============>:- Navigate Arrow

const navigateBtn = document.querySelector('.navigate__btn a')
const navigateIcon = document.querySelector('.navigate__btn a i')
navigateBtn.addEventListener('click',function () {

	if (navigateIcon.classList.contains('rotate')) {
		navigateBtn.href = "#top";
		navigateIcon.classList.remove('rotate');
	}else{
		navigateIcon.classList.add('rotate');
		navigateBtn.href = "#bottom";
	}
});