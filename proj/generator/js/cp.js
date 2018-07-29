// ColorPicker take css-selector of DOM-element (string, css-style) and property name (string)
// when mouse leave the CP propety of element take value wich user checked in CP

let toPick = (dataCp, callback) => {

//===============================================================================
//===========================default parameters==================================
//===============================================================================

	// select function

	let $ = (selector) => {
		return document.querySelector(selector);
	}

	// function fill main field of color picker with color from stripe
	// and black gradient from 0 to 1 opacity

	let fillFieldGradient = (c,w,h,color) => {

		c.clearRect(0, 0, w, h);
		c.fillStyle = color;
		c.fillRect(0, 0, w, h);

		let gr = c.createLinearGradient(0, 0, w, h);

		gr.addColorStop(0, 	'rgba(0, 0, 0, 1)');
		gr.addColorStop(1, 	'rgba(0, 0, 0, 0)');

		c.fillStyle = gr;
		c.fillRect(0, 0, w, h);
		c.strokeRect(0, 0, w, h);
	}

	// rgb to HEX converter. This function take three parameters of color RED, 
	// GREEN, BLUE of rgb format. Than return default color in HEX format

	let rgbToHEX = (r, g, b) => {

		r = r.toString(16);
		g = g.toString(16);
		b = b.toString(16);

		if (r.length < 2) r = '0' + r;
		if (g.length < 2) g = '0' + g;
		if (b.length < 2) b = '0' + b;

		return r+g+b;
	}

	//stripe gradient function

	let stripeGradient = (c,w,h,outc,outw,outh,color) => {
		let gradient = c.createLinearGradient(0,0,0,h);

		gradient.addColorStop(0, 	'rgb(255, 0, 0)');
		gradient.addColorStop(0.17, 'rgb(255, 255, 0)');
		gradient.addColorStop(0.35,	'rgb(0, 255, 0)');
		gradient.addColorStop(0.5, 	'rgb(0, 255, 255)');
		gradient.addColorStop(0.67, 'rgb(0, 0, 255)');
		gradient.addColorStop(0.84, 'rgb(255, 0, 255)');
		gradient.addColorStop(1, 	'rgb(255, 0, 0)');

		c.fillStyle = gradient;
		c.fillRect(0,0,w,h);
		c.strokeRect(0,0,w,h);

		fillFieldGradient(outc, outw, outh, color);
	}

//==================================================================================================================
//==============================================general settings of picker==========================================
//==================================================================================================================
	
	let resultColor = $('.CP[data-cp='+ dataCp +'] .CPColor'),
		resultText 	= $('.CP[data-cp='+ dataCp +'] .CPHEX'),
		blockStripe = $('.CP[data-cp='+ dataCp +'] .CPStripe'),
		blockField 	= $('.CP[data-cp='+ dataCp +'] .CPField'),
		colorPicker = $('.CP[data-cp='+ dataCp +']'),
		openButton	= $('.CPstartButton[data-cp="'+ dataCp +'"]'),
		HEX;

	let stripe = {
		"c": blockStripe.getContext('2d'),
		"w": blockStripe.width,
		"h": blockStripe.height
	};

	let block = {
		"c": blockField.getContext('2d'),
		"w": blockField.width,
		"h": blockField.height
	};

	// drawing gradient stripe
	
	stripeGradient(stripe.c, stripe.w, stripe.h, block.c, block.w, block.h, 'red');	

	// drawing blackgradient of working field

	blockStripe.addEventListener('click', e =>  {
		let color 	= stripe.c.getImageData(e.offsetX, e.offsetY, 1, 1).data;
			HEX 	= '#' + rgbToHEX(color[0], color[1], color[2]);
		fillFieldGradient(block.c, block.w, block.h, HEX);
	});

	blockField.addEventListener('click', e => {
		let color 	= block.c.getImageData(e.offsetX, e.offsetY, 1, 1).data;
			HEX 	= '#' + rgbToHEX(color[0], color[1], color[2]);

		resultColor.style.backgroundColor 	= HEX;
		resultText.innerText 				= HEX;
	});

	// set open/close function for colorePicker

	openButton.addEventListener('mouseenter', (e) => {
		let x = e.pageX,
			y = e.pageY;
			w = window.innerWidth,
			h = window.innerHeight;

		x < w/2 ? x = x : x -= 390;
		y < h/2 ? y = y : y -= 200;

		colorPicker.style.left 				= x + 'px';
		colorPicker.style.top 				= y + 'px';
		openButton.style.backgroundColor 	= HEX;
		openButton.style.opacity			= '0';
	});

	// replace first letter 

	let toCamelCase = str => {
		str = str.split('-');
		let out = '';
		for (let i = 0; i < str.length; i++) {
			i == 0 ? out += str[i] : out += str[i][0].toUpperCase() + str[i].substring(1);
		}
		return out;
	}

//====================================================================================================
//=============================================start picker===========================================
//====================================================================================================

	// function for exiting the picker
	// and adding ckecked color to element

	colorPicker.addEventListener('mouseleave', () => {
		openButton.style.background 	= HEX;
		openButton.style.opacity 		= 1;
		colorPicker.style.left 			= '-390px';
		callback(HEX);
	});
};