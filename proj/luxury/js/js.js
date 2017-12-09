jQuery(document).ready(function($) {
	
	$('.form .start').on('click', () => {

		let name = $('#name').val();
		let email = $('#email').val();
		let phone = $('#phone').val();

		if ( !name && !email && !phone) {
			alert('Please enter complete information!');
		}
		else {
		// $.post('index.php', 
		// {
			// 	"name": name,
			// 	"email": email,
			// 	"phone": phone
			// }, 
			// data => {
			// });
			$('.form').attr('hidden', true);
			$('.alert-success').removeAttr('hidden');
			$('.bg-none').addClass('bg');
		}
	});

	$('.fillForm').on('click', () => {
		$('.form').attr('hidden', true);
		$('.alert-form').removeAttr('hidden');
		$('.bg-none').addClass('bg');
	});

	$('.alert-start').on('click', () => {

		let name = $('#name1').val();
		let email = $('#email1').val();
		let phone = $('#phone1').val();

		if ( !name && !email && !phone) {
			alert('Please enter complete information!');
		}
		else {
		// $.post('index.php', 
		// {
		// 	"name": name,
		// 	"email": email,
		// 	"phone": phone
		// }, 
		// data => {
		// });
			$('.alert-form').attr('hidden', true);
			$('.alert-success').removeAttr('hidden');
			$('.bg-none').addClass('bg');
		}
	});




	$('#alert').on('click', close);
	$('#success').on('click', close);
	$('.alert-ok').on('click', close);
});

let close = () => {
	$('.alert-form').attr('hidden', true);
	$('.alert-success').attr('hidden', true);
	$('.form').removeAttr('hidden');
	$('.bg-none').removeClass('bg')
}