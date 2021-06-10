// Blurry Loading JS
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const splitH1 = document.querySelectorAll('.split-h1')
var homeCount = 0

var load = 0
if (loadText != null) {
	var int = window.setInterval(blurring, 25)
} //Hiding split container h1 tag
splitH1.forEach((e) => {
	e.style.display = 'none'
})
// Scale Function
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
// Blurring Function
function blurring() {
	load++
	if (load > 99) {
		clearInterval(int)

		// Showing split container h1 tag
		splitH1.forEach((e) => {
			e.style.display = 'block'
		})
		// Removing Blur Background Elements after Blurring
		bg.remove()
		loadText.remove()
	}
	loadText.style.opacity = scale(load, 0, 100, 1, 0)
	bg.style.opacity = scale(load, 0, 100, 1, 0)
	bg.style.filter = `opacity(${scale(load, 0, 100, 30, 0)})`
	homeCount++
}

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

// FAQ Collapse Functioning
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((toggle) => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active')
	})
})
// function openNav() {
// 	document.getElementById('mySidenav').style.width = '250px'
// 	document.getElementById('main').style.marginLeft = '250px'
// }

// /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
// function closeNav() {
// 	document.getElementById('mySidenav').style.width = '0'
// 	document.getElementById('main').style.marginLeft = '0'
// }
