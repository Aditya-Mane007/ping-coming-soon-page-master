const form = document.querySelector('form');
const email = document.querySelector('.email');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

checkInputs = () => {
	const emailValue = email.value.trim();

	if (emailValue === '') {
		setError(email, 'Email cannot be empty');
	} else if (!isemail(emailValue)) {
		setError(email, 'Please provide valid email');
	} else {
		setSuccess(email);
	}
};
function isemail(email) {
	return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,5})$/.test(email);
}

function setError(input, msg) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.textContent = msg;
}
function setSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
