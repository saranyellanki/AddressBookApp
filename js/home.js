window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})

const createInnerHtml = () => {
    const innerHtml = `
    <tr>
        <th>Fullname</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
        <th>Phone Number</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td>Saran Yellanki</td>
        <td>FNo 103 Vinayaka Plaza Kurmannapalem</td>
        <td>Visakhapatnam</td>
        <td>Andhra Pradesh</td>
        <td>9618058101</td>
        <td>530046</td>
        <td>
            <img id="1" onclick="remove()" alt="delete" src="../assets/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update()" src="../assets/create-black-18dp.svg">
        </td>
    </tr>
    <tr>
        <td>Dinesh Bodepalli</td>
        <td>Nad Lane number 7, Simhachalam</td>
        <td>Visakhapatnam</td>
        <td>Andhra Pradesh</td>
        <td>8437473059</td>
        <td>530032</td>
        <td>
            <img id="1" onclick="remove()" alt="delete" src="../assets/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update()" src="../assets/create-black-18dp.svg">
        </td>
    </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}