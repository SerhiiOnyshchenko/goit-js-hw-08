import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputMessage = document.querySelector('textarea[name="message"]');
let formData = {};

populateInput();

form.addEventListener('input', throttle(setMessageToLocal, 500));
form.addEventListener('submit', resetAndSubnitForm);

function resetAndSubnitForm(e) {
		e.preventDefault();
		const objSubmit = JSON.parse(localStorage.getItem(STORAGE_KEY))
	console.log('email:',objSubmit.email);
	console.log('message:', objSubmit.message);
	localStorage.removeItem(STORAGE_KEY);
   form.reset();
}

function setMessageToLocal(e) {
   const message = e.target.value;

   formData[e.target.name] = message;
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInput() {
   const textForInput = localStorage.getItem(STORAGE_KEY);
   const obj = JSON.parse(textForInput);
   if (textForInput) {
      if (obj.email) {
         inputEmail.value = obj.email;
      }
      if (obj.message) {
         inputMessage.value = obj.message;
		}
		formData = obj;
   }
}
