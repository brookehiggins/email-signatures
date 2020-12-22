

updateNameValue = (e) => {
    document.getElementById('name').innerHTML = e.target.value
};

const nameInput = document.getElementById('nameInput')
nameInput.addEventListener('keyup', updateNameValue)


updateTitleValue = (e) => {
    document.getElementById('title').innerHTML = e.target.value
};

const titleInput = document.getElementById('titleInput')
titleInput.addEventListener('keyup', updateTitleValue)


updatePhoneNumberValue = (e) => {
    document.getElementById('phoneNumber').innerHTML = e.target.value
};

const phoneNumberInput = document.getElementById('phoneNumberInput')
phoneNumberInput.addEventListener('keyup', updatePhoneNumberValue)

updateEmailValue = (e) => {
    document.getElementById('email').innerHTML = e.target.value
};

const emailInput = document.getElementById('emailInput')
emailInput.addEventListener('keyup', updateEmailValue)

// const toBase64 = file => new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = error => reject(error);
// });

updateImageValue = (e) => {
    document.getElementById('yourImage').src = e.target.value
};

const imageInput = document.getElementById('imageInput')
imageInput.addEventListener('keyup', updateImageValue)
