<?php 
    session_start();
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
            <form method="GET" id="reg" action="<?php echo $_SERVER['PHP_SELF']; ?>" >
                <input type="text" id="nomeReg" name="regione" placeholder="Seleziona una Regione">
                <input type="submit" value="Seleziona">
                
            </form>
            <form method="GET" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <select name="parchi" id="pSl"></select>
            </form>
        </div>
        <script src="script.js"></script>
    </body>
</html>