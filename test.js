let modal = document.getElementById('myModal')
let btn = document.getElementById('myBtn')
let span = document.getElementsByClassName('close')[0]
btn.onclick = function() {
    modal.style.display = 'block';
}
span.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
let fName = document.getElementById('fName')
let lName = document.getElementById('lName')
let eMail = document.getElementById('eMail')
let usersName = document.getElementById('usersData1')
let usersLastName = document.getElementById('usersData2')
let usersMail = document.getElementById('usersData3')
let comment = document.getElementById('comment')
let comm = document.getElementById('comm')
comment.onclick = function() {
    comment.value = ''
    comment.style.color = 'rgb(0, 0, 0, 1)'
    comm.style.color = 'rgb(0, 0, 0, 0.7)'
    if (lName.value == '' || lName.value == 'Last Name *') {
        lName.value = 'Last Name *'
        usersLastName.style.color = 'rgb(0, 0, 0, 0)'
        lName.style.color = 'rgb(0, 0, 0, 0.7)'
    }
    if (eMail.value == '' || eMail.value == 'user@gmail.com *') {
        eMail.value = 'user@gmail.com *'
        eMail.style.color = 'rgb(0, 0, 0, 0.7)'
        usersMail.style.color = 'rgb(0, 0, 0, 0)'
    }
    if (fName.value == '' || fName.value == 'Last Name *') {
        fName.value = 'First Name *'
        usersName.style.color = 'rgb(0, 0, 0, 0)'
        fName.style.color = 'rgb(0, 0, 0, 0.7)'
    }
}
fName.onclick = function() {
    fName.value = ''
    fName.style.color = 'rgb(0, 0, 0, 1)'
    usersName.style.color = 'rgb(0, 0, 0, 0.7)'
    if (lName.value == '' || lName.value == 'Last Name *') {
        lName.value = 'Last Name *'
        usersLastName.style.color = 'rgb(0, 0, 0, 0)'
        lName.style.color = 'rgb(0, 0, 0, 0.7)'
    }
    if (eMail.value == '' || eMail.value == 'user@gmail.com *') {
        eMail.value = 'user@gmail.com *'
        eMail.style.color = 'rgb(0, 0, 0, 0.7)'
        usersMail.style.color = 'rgb(0, 0, 0, 0)'
    }
    if (comment.value == '' || comment.value == 'Type your comment...') {
        comment.value = 'Type your comment...'
        comm.style.color = 'rgb(0, 0, 0, 0)'
        comment.style.color = 'rgb(0, 0, 0, 0.7)'
    }
}
lName.onclick = function() {
    lName.value = ''
    lName.style.color = 'rgb(0, 0, 0, 1)'
    usersLastName.style.color = 'rgb(0, 0, 0, 0.7)'
    if (fName.value == '' || fName.value == 'Last Name *') {
        fName.value = 'First Name *'
        usersName.style.color = 'rgb(0, 0, 0, 0)'
        fName.style.color = 'rgb(0, 0, 0, 0.7)'
    }
    if (eMail.value == '' || eMail.value == 'user@gmail.com *') {
        eMail.value = 'user@gmail.com *'
        eMail.style.color = 'rgb(0, 0, 0, 0.7)'
        usersMail.style.color = 'rgb(0, 0, 0, 0)'
    }
    if (comment.value == '' || comment.value == 'Type your comment...') {
        comment.value = 'Type your comment...'
        comm.style.color = 'rgb(0, 0, 0, 0)'
        comment.style.color = 'rgb(0, 0, 0, 0.7)'
    }
}
eMail.onclick = function() {
    eMail.value = ''
    eMail.style.color = 'rgb(0, 0, 0, 1)'
    usersMail.style.color = 'rgb(0, 0, 0, 0.7)'
    if (lName.value == '' || lName.value == 'Last Name *') {
        lName.value = 'Last Name *'
        usersLastName.style.color = 'rgb(0, 0, 0, 0)'
        lName.style.color = 'rgb(0, 0, 0, 0.7)'
    }
    if (fName.value == '' || fName.value == 'user@gmail.com *') {
        fName.value = 'First Name *'
        usersName.style.color = 'rgb(0, 0, 0, 0)'
        fName.style.color = 'rgb(0, 0, 0, 0.7)'
    }
    if (comment.value == '' || comment.value == 'Type your comment...') {
        comment.value = 'Type your comment...'
        comm.style.color = 'rgb(0, 0, 0, 0)'
        comment.style.color = 'rgb(0, 0, 0, 0.7)'
    }
}
let totalPrice = 0
let checkbox1 = document.getElementById('one')
let checkbox2 = document.getElementById('two')
let prod = document.getElementById('selector')
function total() {
    totalPrice = 150 + Number(prod.value)
    if (checkbox1.checked == true) {
        totalPrice += 50
    } else {
        totalPrice += -50
    }
    if (checkbox2.checked == true) {
        totalPrice += 100
    } else {
        totalPrice += -100
    }
    document.getElementById('totalPrice').innerHTML = `$${totalPrice}`
}
function result() { 
    if (fName.value == '' || fName.value == 'First Name *') {
        document.getElementById('fName').style.background = 'rgb(255, 118, 118)'
        document.getElementById('err1').style.display = 'block'
    } else {
        document.getElementById('fName').style.background = 'rgb(255, 255, 255)'
        document.getElementById('err1').style.display = 'none'
    }
    if (lName.value == '' || lName.value == 'Last Name *') {
        document.getElementById('lName').style.background = 'rgb(255, 118, 118)'
        document.getElementById('err2').style.display = 'block'
    } else {
        document.getElementById('lName').style.background = 'rgb(255, 255, 255)'
        document.getElementById('err2').style.display = 'none'
    }
    if (!eMail.value.endsWith('@gmail.com')) {
        document.getElementById('eMailErr').innerHTML = `Please enter a valid email address.`
        document.getElementById('eMail').style.background = 'rgb(255, 118, 118)'
        document.getElementById('err3').style.display = 'block'
        if (eMail.value == '' || eMail.value == 'user@gmail.com *') {
            document.getElementById('eMailErr').innerHTML = `Please fill in an email address.`
        }
    } else {
        document.getElementById('eMail').style.background = 'rgb(255, 255, 255)'
        document.getElementById('err3').style.display = 'none'
    }
    if (document.getElementById('selector').value == 0) {
        document.getElementById('selector').style.background = 'rgb(255, 118, 118)'
        document.getElementById('err4').style.display = 'block'
    } else {
        document.getElementById('selector').style.background = 'rgb(255, 255, 255)'
        document.getElementById('err4').style.display = 'none'
    }
    if (document.getElementById('two').checked) {
        document.getElementById('two').value = 200
    } else {
        document.getElementById('two').value = 0
    }
    if (document.getElementById('one').checked) {
        document.getElementById('one').value = 100
    } else {
        document.getElementById('one').value = 0
    }
    if (fName.value !== '' && fName.value !== 'First Name *' && lName.value !== '' && lName.value !== 'Last Name *' && eMail.value !== '' && eMail.value !== 'user@gmail.com *' && selector.value !== 0) {
        console.log([fName.value, lName.value, eMail.value, totalPrice, selector.value, document.getElementById('one').value, document.getElementById('two').value, document.getElementById('comment').value])
    }
}

//Здесь я нашел альтернативное "промежуточное" решение, закинув все данные, проходящие проверку, в массив. Для полного 
//выполнения поставленной задачи мне потребовалось бы чуть больше времени. Массив выводится в консоль для быстрой 
//демонстрации работоспособности и устойчивости кода.