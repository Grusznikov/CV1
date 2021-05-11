<?php

    if(isset($_POST['submit']))
    {
        $name = $_POST['imie'];
        $mailFrom = $_POST['email'];
        $subject = $_POST['temat'];
        $message = $_POST['tresc'];

        $mailTo = "kontakt@szymonfrontend.pl";
        $headers = "Od: ".$mailFrom;
        $txt = "Dostałeś wiadomość od ".$name."\n\n".$message."\n\n Odpisz na: ".$mailFrom;

        mail($mailTo, $subject, $txt, $headers);
        header("Location: index.html?mailsend");

    }