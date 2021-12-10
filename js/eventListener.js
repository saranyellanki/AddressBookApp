window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function() {
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).name = name.value;
            textError.textContent = "";
        }catch (e) {
            textError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const output = document.querySelector('.address-output');
    address.addEventListener('input',function(){
        if(address.value.length == 0){
            output.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).address = address.value;
            output.textContent = "";
        }catch (e) {
            output.textContent = e;
        }
    });

    const zipcode = document.querySelector('#zipcode');
    const zip_error = document.querySelector('.zip-error');
    zipcode.addEventListener('input',function(){
        if(zipcode.value.length == 0){
            zip_error.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).zipcode = zipcode.value;
            zip_error.textContent = "";
        }catch (e) {
            zip_error.textContent = e;
        }
    });

    const phoneNumber = document.querySelector('#phone');
    const phone_error = document.querySelector('.number-error');
    phoneNumber.addEventListener('input',function(){
        if(phoneNumber.value.length == 0){
            phone_error.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).phoneNumber = phoneNumber.value;
            phone_error.textContent = "";
        }catch (e) {
            phone_error.textContent = e;
        }
    });
})

const save = () => {
    try {
        createAddressBook();
    }catch (e) {
        return;
    }
}

const createAddressBook = () => {
    let addressBook = new AddressBookData();
    addressBook.name = document.querySelector('#name').value;
    addressBook.address = document.querySelector('#address').value;
    addressBook.city = document.querySelector('#city').value;
    addressBook.state = document.querySelector('#state').value;
    addressBook.zipcode = document.querySelector('#zipcode').value;
    addressBook.phoneNumber = document.querySelector('#phone').value;
    alert(addressBook.toString());
    return addressBook;
}