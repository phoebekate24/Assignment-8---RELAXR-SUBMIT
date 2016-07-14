$(document).ready(start);


function start(){
	$("#registerForm").submit(function(e){
		e.preventDefault();
		var name = $('input[name="userName"]').val();
		var terms = $('input[name="termsConditions"]').val();
		var state = $('input[name="selectStates"]').val();

		emailjs.send("gmail","template_hph09ivG",{to_name: name, message_html: "Hello, This is a test."});

	});
}