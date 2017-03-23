
<html>

<body>

  <?php
  if( $_POST["yourname"] || $_POST["sangre"] || $_POST["email"])
  {
  echo "Welcome: ". $_POST['yourname']. "<br />";
  echo "Your sangre is: ". $_POST["sangre"]. "<br />";
  echo "Your email No. is: ". $_POST["email"];
  }
  ?>

Nombre: <?php echo htmlspecialchars($_POST['yourname']); ?><br>
Tipo de Sangre: <?php echo $_POST["sangre"]; ?><br>
Mail: <?php echo $_POST["email"]; ?><br>
Día en el que llegas: <?php echo $_POST["arrDate"]; ?><br>
Numero de Noches: <?php echo $_POST["nights"]; ?><br>
Numero de guests: <?php echo $_POST["guests"]; ?>

 </body>
 </html>
