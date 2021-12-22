const slides = document.querySelectorAll('.slide');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
	// Get current class
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	// Check for next slide
	if (current.nextElementSibling) {
		// Add current to next sibling
		current.nextElementSibling.classList.add('current');
	} else {
		// Add current to start
		slides[0].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
};

// Auto slide
if (auto) {
	// Run next slide at interval time
	slideInterval = setInterval(nextSlide, intervalTime);
}


let img1 = document.querySelector(".cloud");
let img2 = document.querySelector(".cloud1");
let img3 = document.querySelector(".cloud2");
let img4 = document.querySelector(".cloud3");
// console.log(img1, img2, img3, img4);



window.addEventListener("scroll", () => {
	if (window.scrollY > 1300) {
		img1.classList.add("aa");
		img2.classList.add("bb");
		img3.classList.add("bb");
		img4.classList.add("bb");
		console.log(window.scrollY);


	} else {
		img1.classList.remove("aa");
		img2.classList.remove("bb");
		img3.classList.remove("bb");
		img4.classList.remove("bb");
	}
})


let burger = document.querySelector(".burger");
let navbar = document.querySelector(".navBar");
let resp = document.querySelector(".allItems");


// console.log(resp);
burger.addEventListener('click', () => {

	navbar.classList.toggle('h-nav');
	resp.classList.toggle('v-class');
})


















