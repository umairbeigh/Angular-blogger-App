<?php

class database
{
  private $host='localhost';
  private $dbName='mybloger';
  private $userName='root';
  private $password='';
  private $con;


  function __construct()
  {
    $this->con = mysqli_connect($this->host,$this->userName,$this->password,$this->dbName) or die('Could not connect to database');
  }

  public function getdata($query)
  {

    $get = mysqli_query($this->con,$query);
    while($row = mysqli_fetch_assoc($get))
    {

        $results[]=$row;

    }
    header("content-type:application /json");
    echo(json_encode($results));

  }

  public function setdata($query)
  {
    mysqli_query($this->con,$query);
  }
}


?>
