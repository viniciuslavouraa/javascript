const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()
    function validation() {
        if(nameInput.value.length == 0  && emailInput.value.length == 0) {
            return false
        } else {
            return true
        }
    }
    if(validation() === false) {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'
        msg.style.textAlign = 'center'
        setTimeout( () => msg.remove(), 3000)
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li);
        //Clear the field
        nameInput.value = ''
        emailInput.value = ''
    } 

}