let isUpdate = false;
let addressBookObj = {};

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
    const output = document.querySelector('.address-error');
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

    checkForUpdate();
});

const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        setAddressBookObj();
        createAndUpdateStorage();
        resetForm();
        window.location.replace('../pages/homePage.html');
    }catch (e) {
        return;
    }
}

const setAddressBookObj = () => {
    addressBookObj._name = document.querySelector('#name').value;
    addressBookObj._address = document.querySelector('#address').value;
    addressBookObj._city = document.querySelector('#city').value;
    addressBookObj._state = document.querySelector('#state').value;
    addressBookObj._zipcode = document.querySelector('#zipcode').value;
    addressBookObj._phoneNumber = document.querySelector('#phone').value;
}

const createAndUpdateStorage = () => {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList){
        let addressBookData = addressBookList.find(contactData => contactData._name == addressBookObj._name)
        if(!addressBookData) {
            addressBookList.push(setAddressBookData());
        }else {
            const index = addressBookList.map(contactData => contactData._name).indexOf(addressBookData._name);
            addressBookList.splice(index,1,setAddressBookData());
        }
    }else {
        addressBookList = [setAddressBookData()]
    }
    localStorage.setItem("AddressBookList",JSON.stringify(addressBookList));
}

const setAddressBookData = () => {
    let contactData = new AddressBookData();
    try {
        contactData.name = addressBookObj._name;
    } catch (e) {
        setTextValue('.text-error',e);
        throw e;
    }
    try {
        contactData.address = addressBookObj._address;
    } catch (e) {
        setTextValue('.address-output',e);
        throw e;
    }
    try {
        contactData.zipcode = addressBookObj._zipcode;
    } catch (e) {
        setTextValue('.zip-error',e);
        throw e;
    }
    try {
        contactData.phoneNumber = addressBookObj._phoneNumber;
    } catch (e) {
        setTextValue('.number-error',e);
        throw e;
    }
    contactData.city = addressBookObj._city;
    contactData.state = addressBookObj._state;
    return contactData;
}

const resetForm = () => {
    setValue('#name','');
    setValue('#address','');
    setValue('#city','');
    setValue('#state','');
    setValue('#zipcode','');
    setValue('#phone','');
}

const setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id,value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const checkForUpdate = () => {
    const addressBookJson = localStorage.getItem("editContact");
    isUpdate = addressBookJson ? true : false;
    if(!isUpdate) return;
    addressBookObj = JSON.parse(addressBookJson);
    setForm();
}

const setForm = () => {
    setValue('#name',addressBookObj._name);
    setValue('#address',addressBookObj._address);   
    setValue('#city',addressBookObj._city);
    setValue('#state',addressBookObj._state);
    setValue('#zipcode',addressBookObj._zipcode);
    setValue('#phone',addressBookObj._phoneNumber);
}