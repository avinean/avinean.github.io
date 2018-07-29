let $ = selector => document.querySelector(selector);

$('#open').addEventListener('click', e => {
	e.target.classList.toggle('close');
	e.target.parentElement.parentElement.classList.toggle('closeheader');
});


//===================================
//==============slider===============
//===================================

let counter = 1;

$('.slider').addEventListener('click', e => {

	if (e.target.id == 'left') {
		moveFromCenterToRight('s' + counter);
		counter == 3 ? counter = 1 : counter++;
		moveFromLeftToCenter('s' + counter);
	}

	if (e.target.id == 'right') {
		moveFromCenterToLeft('s' + counter);
		counter == 1 ? counter = 3 : counter--;
		moveFromRightToCenter('s' + counter);
	}

});

function moveFromLeftToCenter (index) {
	console.log($('[data-id="' + index + '"]'));
	$('[data-id="' + index + '"]').style.zIndex = '100';
	$('[data-id="' + index + '"]').style.transition = 'none';
	$('[data-id="' + index + '"]').style.left = '-100%';
	setTimeout(function () {
		$('[data-id="' + index + '"]').style.transition = 'all ease 1s';
		$('[data-id="' + index + '"]').style.left = '0%';
	}, 100);
}

function moveFromCenterToRight (index) {
	console.log($('[data-id="' + index + '"]'));
	$('[data-id="' + index + '"]').style.zIndex = '99';
	$('[data-id="' + index + '"]').style.transition = 'none';
	$('[data-id="' + index + '"]').style.left = '0%';
	setTimeout(function () {
		$('[data-id="' + index + '"]').style.transition = 'all ease 1s';
		$('[data-id="' + index + '"]').style.left = '100%';
	}, 100);
}

function moveFromRightToCenter (index) {
	console.log($('[data-id="' + index + '"]'));
	$('[data-id="' + index + '"]').style.zIndex = '100';
	$('[data-id="' + index + '"]').style.transition = 'none';
	$('[data-id="' + index + '"]').style.left = '100%';
	setTimeout(function () {
		$('[data-id="' + index + '"]').style.transition = 'all ease 1s';
		$('[data-id="' + index + '"]').style.left = '0%';
	}, 100);
}

function moveFromCenterToLeft (index) {
	console.log($('[data-id="' + index + '"]'));
	$('[data-id="' + index + '"]').style.zIndex = '99';
	$('[data-id="' + index + '"]').style.transition = 'none';
	$('[data-id="' + index + '"]').style.left = '0%';
	setTimeout(function () {
		$('[data-id="' + index + '"]').style.transition = 'all ease 1s';
		$('[data-id="' + index + '"]').style.left = '-100%';
	}, 100);
}


//===================================
//==============mini  slider=========
//===================================

let firstItem = 3;
let centerItem = 1;
let lastItem = 2;
let sliderColl = document.getElementsByClassName('slider-item');

$('.minislider').addEventListener('click', e => {
	if (e.target.id == 'left') {
		moveLeft(sliderColl[0], sliderColl[1], sliderColl[2], 1, 3);
	}

	if (e.target.id == 'right') {
		moveRight(sliderColl[0], sliderColl[1], sliderColl[2], 1, 3);		
	}

});

function moveLeft (elem1, elem2, elem3, min, max) {
	firstItem < min ? firstItem = max : firstItem;
	firstItem > max ? firstItem = min : firstItem;
	elem1.src = 'img/slider' + firstItem + '.jpg';
	centerItem < min ? centerItem = max : centerItem;
	centerItem > max ? centerItem = min : centerItem;
	elem2.src = 'img/slider' + centerItem + '.jpg';
	lastItem < min ? lastItem = max : lastItem;
	lastItem > max ? lastItem = min : lastItem;
	elem3.src = 'img/slider' + lastItem + '.jpg';
	firstItem--;
	centerItem--;
	lastItem--;
}

function moveRight (elem1, elem2, elem3, min, max) {
	firstItem < min ? firstItem = max : firstItem;
	firstItem > max ? firstItem = min : firstItem;
	elem1.src = 'img/slider' + firstItem + '.jpg';
	centerItem > max ? centerItem = min : centerItem;
	centerItem < min ? centerItem = max : centerItem;
	elem2.src = 'img/slider' + centerItem + '.jpg';
	lastItem > max ? lastItem = min : lastItem;
	elem3.src = 'img/slider' + lastItem + '.jpg';
	lastItem < min ? lastItem = max : lastItem;
	firstItem++;
	centerItem++;
	lastItem++;
}
