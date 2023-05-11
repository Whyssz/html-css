import mixitup from 'mixitup';
import { pets } from './data.js';

renderPets(pets);

export function mixit() {
	let mixer = mixitup('.section-projects__inner');
}

const navBlock = document.querySelector('.project-nav__block');

// let isDragging = false;
let isScrolling = false;

// let touchX = null;

// const handleTouchStart = e => {
// 	const touch = e.touches[0];
// 	touchX = touch.clientX;
// 	console.log(touch.clientX);
// 	// navBlock.scrollLeft -= e.movementX;
// };

// const handleTouchMove = e => {
// 	// navBlock.querySelector(
// 	// 	'.project-nav__controls'
// 	// ).style.cssText = `transform: translateX(${num}px)`;
// };

// navBlock.addEventListener('touchmove', handleTouchStart);

function checkAttr() {
	// or that (more control) this.scrollWidth === this.scrollLeft + this.clientWidth
	if (navBlock.scrollLeft > 30) {
		navBlock.classList.add('drop-attr');
	} else {
		if (navBlock.classList.contains('drop-attr')) {
			navBlock.classList.remove('drop-attr');
		}
	}
}

navBlock.addEventListener('mouseenter', () => {
	isScrolling = true;
});

navBlock.addEventListener('mouseleave', () => {
	isScrolling = false;
});

const blockWidth = navBlock.offsetWidth;
let num = 0;

navBlock.addEventListener('wheel', event => {
	if (isScrolling) {
		event.preventDefault();
		if (event.deltaY > 0 && Math.abs(num) < navBlock.offsetWidth - 400) {
			num -= 150;
			navBlock.querySelector(
				'.project-nav__controls'
			).style.cssText = `transform: translateX(${num}px)`;
			checkAttr();
		} else if (event.deltaY < 0 && num < blockWidth && num != 0) {
			num += 150;
			navBlock.querySelector(
				'.project-nav__controls'
			).style.cssText = `transform: translateX(${num}px)`;
			checkAttr();
		}
	}
});

function renderPets(data) {
	const container = document.querySelector('.project-block__items');
	const fragment = document.createDocumentFragment();

	data.forEach((item, idx) => {
		// fragment.insertAdjacentHTML('beforeend', renderTemplate(item));
		let block = document.createElement('article');
		block.innerHTML = renderTemplate(item);
		block.classList.add('mix', 'project-item');
		categories(block, item.categories);
		block.setAttribute(`data-order`, idx + 1);
		fragment.appendChild(block);
	});

	container.appendChild(fragment);
}
function categories(element, arr) {
	arr.forEach(str => {
		let replace = `category-${str}`;
		element.classList.add(replace);
	});
}

function renderTemplate({ name, img, desc, stack, btns }) {
	let btnBlock;
	if (btns.demo && btns.github) {
		btnBlock = `
			<div class="project-item__btns">
				<a href="${btns.github}" target="_blank">GitHub</a>
				<a href="${btns.demo}" target="_blank">Demo</a>
			</div>
		`;
	} else if (btns.github && !btns.demo) {
		btnBlock = `
			<div class="project-item__btns">
					<a href="${btns.github}" target="_blank">GitHub</a>
			</div>
		`;
	} else {
		btnBlock = `
			<div class="project-item__btns">
					<a href="${btns.demo}" target="_blank">Demo</a>
			</div>
		`;
	}

	return `
		<img src="./img/${img}" class="project-item__img" alt="Phot by ${name}">
		<h4 class="project-item__title">${name}</h4>
		<p class="project-item__desc">${desc}</p>
		<div class="project-item__stack">${stack}</div>
		${btnBlock}
	`;
}

/* dragging 
// const dragging = e => {
// 	if (!isDragging) return;
// 	navBlock.classList.add('dragging');
// 	navBlock.scrollLeft -= e.movementX;
// 	checkAttr();
// };
// const dragStop = () => {
// 	isDragging = false;
// 	navBlock.classList.remove('dragging');
// };

// navBlock.addEventListener('mousedown', () => (isDragging = true));
// navBlock.addEventListener('mousemove', dragging);
// document.addEventListener('mouseup', dragStop);
*/
