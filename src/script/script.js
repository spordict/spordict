// Navbar Functioning JS
var navToggle = document.getElementById('nav-toggle')
var sideNavContainer = document.querySelector('.container')
var footer = document.querySelector('.footer')
navToggle.addEventListener('click', () => {
	sideNavContainer.classList.toggle('show-nav')
	if (footer != null) {
		footer.classList.toggle('show-nav')
	}
})

//Split CSS functioning

const splitLeft = document.querySelector('.left')
const splitRight = document.querySelector('.right')
const splitContainer = document.querySelector('.split-container')
if (splitContainer != null) {
	splitLeft.addEventListener('mouseenter', () =>
		splitContainer.classList.add('hover-left')
	)
	splitLeft.addEventListener('mouseleave', () =>
		splitContainer.classList.remove('hover-left')
	)

	splitRight.addEventListener('mouseenter', () =>
		splitContainer.classList.add('hover-right')
	)
	splitRight.addEventListener('mouseleave', () =>
		splitContainer.classList.remove('hover-right')
	)
}

// function openNav() {
// 	document.getElementById('mySidenav').style.width = '250px'
// 	document.getElementById('main').style.marginLeft = '250px'
// }

// /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
// function closeNav() {
// 	document.getElementById('mySidenav').style.width = '0'
// 	document.getElementById('main').style.marginLeft = '0'
// }
