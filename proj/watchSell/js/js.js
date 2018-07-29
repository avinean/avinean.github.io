window.addEventListener("load", function () {

	window.addEventListener("resize", blockSize);
	blockSize();
	function blockSize() {
		var side = document.querySelector('.main_side');
		var content = document.querySelector('.main_content');
		side.style.height = `${content.clientHeight}px`;
	}

	document.querySelector('.header_logo--pmob').addEventListener("click", function () {
		document.querySelector('.header_content').classList.toggle('header_content--open');
		document.querySelector('.header_logo--pmob').classList.toggle('rotate');
	})
});

