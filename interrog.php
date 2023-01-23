<?php 
    session_start();

    $response = "";
    if (isset($_REQUEST['specie']))
    {
        $ip = '127.0.0.1';
        $username = 'root';
        $database = 'sistema_sia';
        $passwd = '';
        $connection = new mysqli($ip, $username, $passwd, $database);
        if ($connection->connect_error) { die($response = "Errore! Impossibile ragiungere il database"); }

        $specie = $_GET['specie'];
        $query = 'SELECT COUNT Specie FROM animali WHERE Specie="' . $specie . '" GROUP BY Specie';
        $queryRes = $connection->query($query);
        if ($queryRes->num_rows > 0)
        {
            
            $response = $queer;
        }
    }
    echo $response;
?>