<?php 
    session_start();
    $_SESSION['regione'] = " ";
    $_SESSION['parchi'] = array();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Sistema SIA</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
    </head>
    <body>
       
        <div>
            <div>
                <input type="text" id="nomeReg" name="regione" placeholder="Seleziona una Regione">
                <button id="ok">Invia</button>
                <button id="del">Cancella</button>
            </div>
                

            <form method="GET" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <select name="parchi" id="pSl"></select>
            </form>
        </div>
        <script src="script.js"></script>
    </body>
</html>