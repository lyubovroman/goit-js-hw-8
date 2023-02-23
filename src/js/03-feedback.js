


import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
const formData = { email: "", message: "" }

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

populateMsgInput();


function onFormInput(event) {
    
    formData.email = inputEl.value.trim();
    formData.message = textareaEl.value.trim();
    
   return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateMsgInput() {
    const savedMsg = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMsg) {
      inputEl.value = savedMsg.email || '';
        textareaEl.value = savedMsg.message || '';
  }
        
   
    return savedMsg;
};

function onFormSubmit(event) {
    event.preventDefault();
    if(formEl.value !== "" && textareaEl.value !== "") {  console.log(populateMsgInput());
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);}
  
  
};


