window.addEventListener('load', () => {

	let $ 		= e => document.querySelector(e),
		_		= e => document.querySelectorAll(e),
		div 	= $('#example'),
		result 	= $('#result');

	let styleObj = {  // object for style arameters
		radius : '',
		blockSize : '',
		border : '',
		boxShadow :''
	};

	//=============================================
	// function for styles outputing
	//=============================================

	function out () {
		let mas = [];
		let i = 0;
		for (let key in styleObj) {
			mas[i] = styleObj[key];
			i++;
		}
		let out = '';

		for (let i = 0; i < mas.length; i++){
			if (mas[i] != '') {
				out += `${mas[i]}<br>`;
			}
		}
		result.innerHTML = out;
	}

	//=========================================================
	//border radius!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//=========================================================

	let radiusObj = {
		tl : '0 ',
		tr : '0 ',
		br : '0 ',
		bl : '0 '
	};

	for (let i = 0; i < _('.border').length; i++){

		_('.border')[i].addEventListener('input', e => {
			console.log(e);
			console.log(e.target);
			console.log(e.target.value);

			if (e.target.getAttribute('id') == 'bdrs') {
				radiusObj.tl = e.target.value + 'px ';
				radiusObj.tr = e.target.value + 'px ';
				radiusObj.br = e.target.value + 'px ';
				radiusObj.bl = e.target.value + 'px';

				for (let i = 0; i < $('#border').length; i++){
					$('#border')[i].value = e.target.value;
				}
			}

			radiusObj[e.target.getAttribute('id')] = e.target.value + 'px ';

			div.style.borderTopLeftRadius 		= radiusObj.tl;
			div.style.borderTopRightRadius 		= radiusObj.tr;
			div.style.borderBottomRightRadius 	= radiusObj.br;
			div.style.borderBottomLeftRadius 	= radiusObj.bl;

			borderRadiusOut();
		});
	}

	function borderRadiusOut () {

		styleObj.radius = `border-radius: ${radiusObj.tl
			+radiusObj.tr
			+radiusObj.br
			+radiusObj.bl
		};`;

		out();
	}

	//=======================================================
	// block size!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//=======================================================

	let sizeObj = {
		height : '', 
		width : ''
	}

	div.onmousedown = function () {
		
		document.onmousemove = function (e) {
			
			div.style.height 	= `${e.offsetY + 100}px`;
			div.style.width 	= `${e.offsetX + 100}px`;
			sizeObj.height 		= `${e.offsetY + 100}px`;
			sizeObj.width 		= `${e.offsetX + 100}px`;

			styleObj.blockSize = `	
			height: ${sizeObj.height};<br>
			width: ${sizeObj.width};`;

			out();
		}

		document.onmouseup = function () {
			document.onmousemove = function () {
				return false;
			}
		}
	}

	//===================================================
	// border!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//===================================================

	let borderObj = {
		borderWidth : '1px ',
		borderStyle : 'solid ', 
		styleObj : $('#borderStyle'),
		list : $('#borderStyle').options,
		borderColor : 'black'
	}

	$('#border').addEventListener('input', e => {
		borderObj.borderWidth = `${e.target.value}px `;
		borderOut();
	});

	borderObj.styleObj.addEventListener('input', () => {
		for (let i = 0; i < borderObj.list.length; i++) {
			if (borderObj.list[i].selected) {
				borderObj.borderStyle = borderObj.list[i].text + ' ';
				borderOut();
			}
		}
	});

	toPick('borderColorColorPicker', color => {
		borderObj.borderColor = color;
		borderOut();
	});


	function borderOut () {

		div.style.border = borderObj.borderWidth 
		+ borderObj.borderStyle 
		+ borderObj.borderColor;

		styleObj.border = `border: ${borderObj.borderWidth 
			+ borderObj.borderStyle 
			+ borderObj.borderColor
		};`;

		out();
	}

	//=======================================================
	// box-shadow!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//=======================================================


	let boxShadowObj = {
		inset : '',
		horiz : '0px ',
		vert : '0px ',
		blur : '0px ',
		rad : '0px ',
		shadowColor : 'black'
	}

	function boxShadowOut () {

		div.style.boxShadow = boxShadowObj.inset
		+ boxShadowObj.horiz 
		+ boxShadowObj.vert 
		+ boxShadowObj.blur 
		+ boxShadowObj.rad 
		+ boxShadowObj.shadowColor;

		styleObj.boxShadow = `box-shadow: ${boxShadowObj.inset
			+ boxShadowObj.horiz 
			+ boxShadowObj.vert 
			+ boxShadowObj.blur 
			+ boxShadowObj.rad 
			+ boxShadowObj.shadowColor};`;
	}

	toPick('boxShadowColorPicker', color => {
		boxShadowObj.shadowColor = color;
		boxShadowOut();
	});

	for (let i = 0; i < _('.shadow').length; i++){
		_('.shadow')[i].addEventListener('input', e => {
			boxShadowObj[e.target.getAttribute('id')] = `${e.target.value}px `;
			boxShadowOut();
		});
	}

	$('#checkShadow').addEventListener('change', () => {
		if ($('#checkShadow').checked) {
			boxShadowObj.inset = 'inset ';
		}
		else {
			boxShadowObj.inset = '';
		}
		boxShadowOut();
	});

	//=============================
	// background 
	//=============================

	toPick('backgroundColorPicker', color => {
		$('body').style.background = color;
	});
});
