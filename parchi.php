<?php
    session_start();

    $response = "";
    if (isset($_REQUEST['regione']))
    {
        if($_REQUEST['regione'] != $_SESSION['regione'])
        {
            $ip = '127.0.0.1';
            $username = 'root';
            $database = 'sistema_sia';
            $passwd = '';
            $connection = new mysqli($ip, $username, $passwd, $database);
            if ($connection->connect_error) { die($response = "Errore! Impossibile ragiungere il database"); }
            
            $regione = $_GET['regione'];
            $query = 'SELECT * FROM parco WHERE Regione="' . $regione .'"';
            $queryRes = $connection->query($query);
            if ($queryRes->num_rows > 0) {
                $parks = array();
                $key = 0;
                while ($row = $queryRes->fetch_assoc()) {
                    $Park = new stdClass();
                    $Park->ID = $row['ID_Parco'];
                    $Park->Name = $row['Nome'];
                    $parks[$key] = $Park;
                    $key += 1;
                }
                $response = json_encode($parks);
                $_SESSION['regione'] = $regione;
        }
        
        }
    }
    echo $response;
?>