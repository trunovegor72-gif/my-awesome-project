const dlg = document.getElementById('contactDialog'); 
const openBtn = document.getElementById('openDialog'); 
const closeBtn = document.getElementById('closeDialog'); 
const form = document.getElementById('contactForm'); 
let lastActive = null; 
openBtn.addEventListener('click', () => { 
lastActive = document.activeElement; 
dlg.showModal();                               
dlg.querySelector('input,select,textarea,button')?.focus(); 
}); 
closeBtn.addEventListener('click', () => dlg.close('cancel'));
// очистка сообщений об ошиьке 
form?.addEventListener('submit', (e) => { 
[...form.elements].forEach(el => el.setCustomValidity?.(''));  
//сброс стандартного поведения в браузере
if (!form.checkValidity()) { 
e.preventDefault();  
//текст для ошибок
const email = form.elements.email; 
if (email?.validity.typeMismatch) { 
email.setCustomValidity('Введите корректный e-mail, например name@example.com'); 
} 
const phone = form.elements.phone; 
if (phone?.validity.patternMismatch) { 
phone.setCustomValidity('Другой формат'); 
} 
form.reportValidity(); 
[...form.elements].forEach(el => { 
if (el.willValidate) el.toggleAttribute('aria-invalid', 
!el.checkValidity()); 
}); 
return; 
} 
e.preventDefault(); 
document.getElementById('contactDialog')?.close('success'); 
form.reset(); 
}); 
dlg.addEventListener('close', () => { lastActive?.focus(); }); 