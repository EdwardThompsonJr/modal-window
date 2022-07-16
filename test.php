<?php
if (isset($_POST)) {
    print("Имя: " . $_POST['fName']);
    print("<br>Email: " . $_POST['eMail']);
    print("<br>last Name: " . $_POST['lName']);
    print("<br>Сообщение: " . $_POST['message']);
}