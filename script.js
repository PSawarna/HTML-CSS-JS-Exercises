function validateNSFW(message) {
	if(message.includes('crap')) {
		return false;
	}
	else {
		return true;
	}
}

function clickListener(event) {
	event.preventDefault();
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;

	if(validateNSFW(messageText) !== true) {
		console.log('This is not safe for work');
		return false
	}
	console.log('Thank you for your message')
}

let submitButton = document.querySelector('#submit-button');
	console.log(submitButton);

submitButton.addEventListener('click', clickListener);


