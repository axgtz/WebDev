<!DOCTYPE html>
<html lang="en">

<body>
<?php
   if(isset($_POST['submit']))
   {
       echo($_POST['yourname']);    
       header('Location: site2.php');
   }
?>
</body>

</html>