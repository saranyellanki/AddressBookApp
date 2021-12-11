window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList = getAddressBookData();
    document.querySelector('.person-count').textContent = addressBookList.length;
    createInnerHtml();
})

const getAddressBookData = () => {
    if(localStorage.getItem('AddressBookList') != undefined) {
        return JSON.parse(localStorage.getItem('AddressBookList'));
    }else {
        return [];
    }
}

const createInnerHtml = () => {
    const headerHtml = "<th>Fullname</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th>"
    let innerHtml = `${headerHtml}`;
    for (const addressBookData of addressBookList) {
        innerHtml = `${innerHtml}
    <tr>
        <td>${addressBookData._name}</td>
        <td class="address-block">${addressBookData._address}</td>
        <td>${addressBookData._city}</td>
        <td>${addressBookData._state}</td>
        <td>${addressBookData._zipcode}</td>
        <td>${addressBookData._phone}</td>
        <td>
            <img id="1" onclick="remove()" alt="delete" src="../assets/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update()" src="../assets/create-black-18dp.svg">
        </td>
    </tr>
    `;
        document.querySelector('#display').innerHTML = innerHtml;
    }
}