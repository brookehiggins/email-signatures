

updateNameValue = (e) => {
    document.getElementById('name').innerHTML = e.target.value
};

const nameInput = document.getElementById('nameInput')
nameInput.addEventListener('keydown', updateNameValue)


updateTitleValue = (e) => {
    document.getElementById('title').innerHTML = e.target.value
};

const titleInput = document.getElementById('titleInput')
titleInput.addEventListener('keydown', updateTitleValue)


updatePhoneNumberValue = (e) => {
    document.getElementById('phoneNumber').innerHTML = e.target.value
};

const phoneNumberInput = document.getElementById('phoneNumberInput')
phoneNumberInput.addEventListener('keydown', updatePhoneNumberValue)

updateEmailValue = (e) => {
    document.getElementById('email').innerHTML = e.target.value
};

const emailInput = document.getElementById('emailInput')
emailInput.addEventListener('keydown', updateEmailValue)

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

updateImageValue =  async (e) => {
    const base64String = await toBase64(e.target.files[0])
    document.getElementById('yourImage').src = base64String
};

const imageInput = document.getElementById('imageInput')
imageInput.addEventListener('change', updateImageValue)

