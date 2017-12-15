var buttons = document.getElementsByClassName('styleButton');
var blocks = document.getElementsByClassName('blockStyle');

function openStyle (e) {
	if (blocks[e].style.display == 'block') {
		blocks[e].style.display = 'none';
		blocks[e].style.height = '0';
	}
	else {
		for (var i = 0; i < blocks.length; i++){
			blocks[i].style.display = 'none';
			blocks[i].style.height = '0';
		}
		blocks[e].style.display = 'block';
		blocks[e].style.height = 'auto';
	}
}



