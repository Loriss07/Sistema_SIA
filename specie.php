<?php
    session_start();

    $response = "";
    if (isset($_REQUEST['parco']))
    {
        $ip = '127.0.0.1';
        $username = 'root';
        $database = 'sistema_sia';
        $passwd = '';
        $connection = new mysqli($ip, $username, $passwd, $database);
        if ($connection->connect_error) { die($response = "Errore! Impossibile ragiungere il database"); }

        $parco = $_GET['parco'];
        $query = 'SELECT Specie,ID_Parco FROM animali WHERE ID_Parco="' . $parco . '"';
        $queryRes = $connection->query($query);
        if ($queryRes->num_rows > 0)
        {
            $species = array();
            $key = 0;
            while ($row = $queryRes->fetch_assoc()) {
                $specie = new stdClass();
                $specie->park_id = $row["ID_Parco"];
                $specie->Name = $row["Specie"];
                $species[$key] = $specie;
                $key += 1;
            }
            $response = json_encode($specie);
        }
    }
    echo $response;
?>